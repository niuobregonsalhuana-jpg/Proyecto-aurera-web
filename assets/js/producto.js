const track = document.getElementById("track");
const images = document.querySelectorAll("#track img");

let index = 0;

function moveCarousel() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  track.style.transform = `translateX(${-index * 100}%)`;
}
setInterval(moveCarousel, 3000);



function toggleAyuda() {
  const cuadro = document.getElementById("cuadroAyuda");
  cuadro.style.display = (cuadro.style.display === "block") ? "none" : "block";
}

function enviarMensaje() {
  const texto = document.querySelector("#cuadroAyuda textarea").value;
  if (texto.trim() === "") {
    alert("Por favor, escribe tu comentario :D");
    return;
  }

  alert("Gracias por tu comentario :D");
  document.querySelector("#cuadroAyuda textarea").value = "";
  document.getElementById("cuadroAyuda").style.display = "none";
}




