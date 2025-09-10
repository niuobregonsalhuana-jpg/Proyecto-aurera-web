const track = document.getElementById("track");
const images = document.querySelectorAll("#track img");

let index = 0;

function moveCarousel() {
  index++;
  if (index >= images.length) {
    index = 0; // vuelve al inicio
  }
  track.style.transform = `translateX(${-index * 100}%)`;
}

// cambia de imagen cada 3 segundos
setInterval(moveCarousel, 3000);
