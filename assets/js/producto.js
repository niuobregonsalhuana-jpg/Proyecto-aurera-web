const track = document.getElementById("track");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll("#track img");

let index = 0;

function moveCarousel() {
  const width = carousel.offsetWidth;
  index++;
  if (index >= images.length) {
    index = 0;
  }
  track.style.transform = `translateX(${-index * width}px)`;
}

setInterval(moveCarousel, 3000);

window.addEventListener("resize", () => {
  const width = carousel.offsetWidth;
  track.style.transform = `translateX(${-index * width}px)`;
});
