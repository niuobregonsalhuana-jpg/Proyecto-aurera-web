// Contador de tarjetas
let giftCards = 0;
const cartConter = document.getElementById("cartCounter");
const promoNotificacion = document.getElementById("promoNotificacion");
const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));

// Función para actualizar el contador
function updateCounter() {
  cartCounter.textContent = `${giftCards} 🎟️`;

  // Cada 2 tarjetas, mostrar el modal de premio
  if (giftCards > 0 && giftCards % 2 === 0) {
    promoNotificacion.classList.add("show");

    setTimeout(() => {
      promoNotificacion.classList.remove("show");
      promoModal.show();
    }, 1500);
  }
}

// Detectar clic en las imágenes y botones "Añadir"
document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("big-product-container");
  const recommendContainer = document.getElementById("product-container");

  // Para los productos principales
  productContainer.addEventListener("click", (e) => {
    if (
      e.target.tagName === "IMG" ||
      e.target.classList.contains("add-button")
    ) {
      giftCards++;
      updateCounter();
    }
  });

  // Para los productos recomendados
  recommendContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      giftCards++;
      updateCounter();
    }
  });
});

let tarjetas = 0;
const cartCounter = document.getElementById("cartCounter");
const notificacion = document.getElementById("promoNotificacion");

// Seleccionamos TODAS las imágenes de productos
document.querySelectorAll(".carousel img, .big-product-container img, .product-container img").forEach(img => {
  img.addEventListener("click", () => {
    tarjetas++;
    cartCounter.textContent = `${tarjetas} 🎟️`;

    // Cuando se junten 2 tarjetas → desbloquea el regalo
    if (tarjetas % 2 === 0) {
      // Mostrar texto en la notificación
      notificacion.textContent = `🎉 ¡Has juntado ${tarjetas} tarjetas y desbloqueaste un regalo!`;
      notificacion.classList.add("show");
      setTimeout(() => notificacion.classList.remove("show"), 3000);

      // Mostrar el modal de Bootstrap
      const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
      promoModal.show();
    }
  });
});