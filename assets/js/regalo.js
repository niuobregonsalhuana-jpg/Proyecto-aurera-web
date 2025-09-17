
let giftCards = 0;
const cartConter = document.getElementById("cartCounter");
const promoNotificacion = document.getElementById("promoNotificacion");
const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));


function updateCounter() {
  cartCounter.textContent = `${giftCards} 🎟️`;


  if (giftCards > 0 && giftCards % 2 === 0) {
    promoNotificacion.classList.add("show");

    setTimeout(() => {
      promoNotificacion.classList.remove("show");
      promoModal.show();
    }, 1500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("big-product-container");
  const recommendContainer = document.getElementById("product-container");


  productContainer.addEventListener("click", (e) => {
    if (
      e.target.tagName === "IMG" ||
      e.target.classList.contains("add-button")
    ) {
      giftCards++;
      updateCounter();
    }
  });

 
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

document.querySelectorAll(".carousel img, .big-product-container img, .product-container img").forEach(img => {
  img.addEventListener("click", () => {
    tarjetas++;
    cartCounter.textContent = `${tarjetas} 🎟️`;

    
    if (tarjetas % 2 === 0) {
    
      notificacion.textContent = `🎉 ¡Has juntado ${tarjetas} tarjetas y desbloqueaste un regalo!`;
      notificacion.classList.add("show");
      setTimeout(() => notificacion.classList.remove("show"), 3000);

 
      const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
      promoModal.show();
    }
  });
});