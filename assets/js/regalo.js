// regalos.js — comportamiento separado:
// - tarjetas -> SOLO productos sin precio en #big-product-container
// - carrito  -> SOLO productos con precio en #product-container

(function () {
  // ---------- Estado ----------
  let giftCount = 0;
  let giftModalShown = false; // regalo por 2 tarjetas — solo 1 vez
  let cart = []; // { name, priceNum, priceText, imgUrl }
  let cartTotal = 0;
  let currencySymbolGlobal = ""; // se asigna al primer producto con precio

  // ---------- Elementos del DOM ----------
  const giftCounterEl = document.getElementById("cartCounter"); // cuadrito rosado
  const promoNotificacion = document.getElementById("promoNotificacion");
  const promoModalEl = document.getElementById("promoModal");
  const promoModal = promoModalEl ? new bootstrap.Modal(promoModalEl) : null;
  const navbarCartEl = document.getElementById("navbarCart"); // icono en navbar
  const cartBadgeEl = document.getElementById("cartBadge"); // badge num carrito

  // Crear miniCart si no existe (no reemplaza nada si ya está)
  let miniCartEl = document.getElementById("miniCart");
  if (!miniCartEl) {
    miniCartEl = document.createElement("div");
    miniCartEl.id = "miniCart";
    miniCartEl.className = "mini-cart";
    miniCartEl.innerHTML = `
      <h6>🛒 Tu carrito</h6>
      <div id="miniCartItems" class="mini-cart-items"></div>
      <hr>
      <p><b>Total: <span id="miniCartTotal">S/ 0.00</span></b></p>
    `;
    document.body.appendChild(miniCartEl);
  }
  const miniCartItemsEl = document.getElementById("miniCartItems");
  const miniCartTotalEl = document.getElementById("miniCartTotal");

  // promos para modal
  const promos = [
    { titulo: "Labial Matte 💄", descripcion: "Un labial matte de larga duración.", imagen: "../img/labial.png" },
    { titulo: "Perfume Elegance 🌸", descripcion: "Fragancia fresca y elegante.", imagen: "../img/perfume.png" },
    { titulo: "Crema Facial 🌿", descripcion: "Hidratación natural para tu piel.", imagen: "../img/crema.png" },
    { titulo: "Sombras Deluxe 🎨", descripcion: "Paleta con colores vibrantes.", imagen: "../img/sombras.png" }
  ];

  // ---------- Helpers UI ----------
  function updateGiftCounterUI() {
    if (!giftCounterEl) return;
    giftCounterEl.innerHTML = `<i class="bi bi-ticket-fill" style="color: gold;"></i> ${giftCount}`;
  }

  function showToast(msg, ms = 2200) {
    if (!promoNotificacion) {
      console.log("Toast:", msg);
      return;
    }
    promoNotificacion.textContent = msg;
    promoNotificacion.classList.add("show");
    setTimeout(() => promoNotificacion.classList.remove("show"), ms);
  }

  function showPromoModalForGifts(count) {
    if (!promoModalEl || !promoModal) return;
    const promo = promos[Math.floor(Math.random() * promos.length)];
    promoModalEl.querySelector(".modal-content").innerHTML = `
      <h2 class="fw-bold text-pink">🌟 ¡Promo especial!</h2>
      <p class="mt-3 text-black">
        Has juntado <strong>${count} tarjetas</strong><br/>
        y desbloqueaste una promoción en: <br/>
        <strong>${promo.titulo}</strong>
      </p>
      <div class="d-flex justify-content-center">
        <img src="${promo.imagen}" alt="${promo.titulo}" class="img-fluid my-3" style="max-width: 180px"/>
      </div>
      <p class="text-center">${promo.descripcion}</p>
      <button type="button" class="btn btn-custom w-100 rounded-pill" data-bs-dismiss="modal">
        Canjear Promo
      </button>
    `;
    promoModal.show();
  }

  function showPromoModalForTwoPriced() {
    if (!promoModalEl || !promoModal) return;
    const promo = promos[Math.floor(Math.random() * promos.length)];
    promoModalEl.querySelector(".modal-content").innerHTML = `
      <h2 class="fw-bold text-pink">🎉 ¡Promo por compra!</h2>
      <p class="mt-3 text-black">
        Has agregado <strong>2 productos</strong> con precio al carrito.<br/>
        Puedes canjear una promoción en: <strong>${promo.titulo}</strong>
      </p>
      <div class="d-flex justify-content-center">
        <img src="${promo.imagen}" alt="${promo.titulo}" class="img-fluid my-3" style="max-width: 160px"/>
      </div>
      <p class="text-center small">${promo.descripcion}</p>
      <button type="button" class="btn btn-custom w-100 rounded-pill" data-bs-dismiss="modal">Ver Promo</button>
    `;
    promoModal.show();
  }

  // ---------- Mini cart rendering ----------
  function renderMiniCart() {
    if (!miniCartItemsEl || !miniCartTotalEl) return;
    miniCartItemsEl.innerHTML = "";

    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "mini-cart-item";
      div.innerHTML = `
        <img src="${item.imgUrl || ''}" alt="${item.name}">
        <div class="info">
          <p class="mb-1">${item.name}</p>
          <p class="fw-bold">${item.priceNum && item.priceNum > 0 ? (item.priceText) : 'Tarjeta 🎟'}</p>
        </div>
        <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${index}">✖</button>
      `;
      miniCartItemsEl.appendChild(div);
    });

    // mostrar total con el símbolo global (si existe) o sin símbolo
    const symbol = currencySymbolGlobal || "S/ ";
    miniCartTotalEl.textContent = symbol + " " + cartTotal.toFixed(2);

    if (cartBadgeEl) cartBadgeEl.textContent = cart.length;
  }

  function removeFromCart(index) {
    const item = cart[index];
    if (!item) return;
    if (item.priceNum && item.priceNum > 0) cartTotal -= item.priceNum;
    cart.splice(index, 1);
    renderMiniCart();
  }

  // ---------- Animación "volar" ----------
  function flyToCart(imgEl) {
    if (!imgEl) return;
    const destEl = navbarCartEl || giftCounterEl || document.body;
    const clone = imgEl.cloneNode(true);
    clone.className = "fly-img";
    clone.style.position = "fixed";
    const rect = imgEl.getBoundingClientRect();
    clone.style.left = rect.left + "px";
    clone.style.top = rect.top + "px";
    clone.style.width = Math.min(120, rect.width) + "px";
    clone.style.height = "auto";
    document.body.appendChild(clone);

    const destRect = destEl.getBoundingClientRect();
    const translateX = destRect.left + destRect.width/2 - (rect.left + rect.width/2);
    const translateY = destRect.top + destRect.height/2 - (rect.top + rect.height/2);

    // forzar reflow
    clone.offsetWidth;
    clone.style.transition = "transform 0.9s cubic-bezier(.2,.8,.2,1), opacity 0.9s";
    clone.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.18)`;
    clone.style.opacity = "0.3";

    setTimeout(() => clone.remove(), 1000);
  }

  // ---------- LISTENERS: SOLO en #big-product-container (tarjetas sin precio) ----------
  const bigContainer = document.getElementById("big-product-container");
  if (bigContainer) {
    bigContainer.addEventListener("click", (e) => {
      const isAddBtn = e.target.classList && e.target.classList.contains("add-button");
      const clickedImg = (e.target.tagName === "IMG" && e.target.closest(".card, .product-card"));
      if (!isAddBtn && !clickedImg) return;

      const card = e.target.closest(".card, .product-card");
      if (!card) return;

      // Si la card tiene precio (<b>...) la ignoramos aquí (porque las pagas están en otro contenedor)
      if (card.querySelector("b")) return;

      // sumar tarjeta (solo para productos sin precio)
      giftCount++;
      updateGiftCounterUI();

      // comportamiento de regalo por 2 tarjetas (solo 1 vez)
      if (giftCount === 2 && !giftModalShown) {
        giftModalShown = true;
        showToast(`🎉 ¡Has juntado 2 tarjetas y desbloqueaste un regalo especial!`);
        if (promoModal) setTimeout(() => promoModal.show(), 1500);
      }

      // promo cada 10 tarjetas
      if (giftCount > 0 && giftCount % 10 === 0) {
        setTimeout(() => showPromoModalForGifts(giftCount), 300);
      }
    });
  }

  // ---------- LISTENERS: SOLO en #product-container (productos con precio) ----------
  const recommendContainer = document.getElementById("product-container");
  if (recommendContainer) {
    recommendContainer.addEventListener("click", (e) => {
      const isAddBtn = e.target.classList && e.target.classList.contains("add-button");
      const clickedImg = (e.target.tagName === "IMG" && e.target.closest(".product-card, .card"));
      if (!isAddBtn && !clickedImg) return;

      const card = e.target.closest(".product-card, .card");
      if (!card) return;

      // Si NO tiene precio (<b>...), lo ignoramos aquí (tarjetas están en big-product)
      const priceEl = card.querySelector("b");
      if (!priceEl) return;

      // obtener datos
      const imgEl = card.querySelector("img");
      const nameEl = card.querySelector("h3, h2, h5, h4");
      const name = nameEl ? nameEl.textContent.trim() : "Producto";
      const priceTextRaw = priceEl.textContent.trim(); // por ej "$9.99" o "S/ 19.99"
      const cleaned = priceTextRaw.replace(/[^0-9,.\-]/g, "").replace(",", ".");
      const priceNum = parseFloat(cleaned) || 0;
      // determinar símbolo (lo que aparezca antes del número)
      const symbolMatch = priceTextRaw.match(/^[^\d.,\s]+/);
      if (!currencySymbolGlobal && symbolMatch) currencySymbolGlobal = symbolMatch[0];

      // animación
      if (imgEl) flyToCart(imgEl);

      // añadir al carrito con precio
      cart.push({ name, priceNum, priceText: priceTextRaw, imgUrl: imgEl ? imgEl.src : "" });
      cartTotal += priceNum;
      renderMiniCart();

      // si hay exactamente 2 productos con precio → mostrar promo relacionada (carrusel)
      const pricedCount = cart.filter(i => i.priceNum && i.priceNum > 0).length;
      if (pricedCount === 2) {
        setTimeout(() => showPromoModalForTwoPriced(), 700);
      }
    });
  }

  // ---------- Delegación para botones "remover" creados dinámicamente ----------
  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList && e.target.classList.contains("remove-btn")) {
      const idx = parseInt(e.target.getAttribute("data-index"));
      if (!isNaN(idx)) removeFromCart(idx);
    }
  });

  // ---------- Hover / mostrar mini cart al pasar por el icono del navbar ----------
  if (navbarCartEl && miniCartEl) {
    navbarCartEl.addEventListener("mouseenter", () => miniCartEl.classList.add("show"));
    navbarCartEl.addEventListener("mouseleave", () => setTimeout(() => miniCartEl.classList.remove("show"), 2000));
    miniCartEl.addEventListener("mouseenter", () => miniCartEl.classList.add("show"));
    miniCartEl.addEventListener("mouseleave", () => miniCartEl.classList.remove("show"));
  }

  // ---------- Inicialización ----------
  updateGiftCounterUI();
  renderMiniCart();

  // DEBUG
  // console.log("regalos.js inicializado", { giftCount, cart, cartTotal });

})();
