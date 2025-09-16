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





//const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const productos = [
      {
        name: "SKIN1004",
        description: "Reparación delicada",
        imgUrl: "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_skin1004.jpg&w=640&q=80"
      },
      {
        name: "COSRX Snail Essence",
        description: "Esencia regeneradora con mucina de caracol",
        imgUrl: "https://cdn.shopify.com/s/files/1/0576/4642/8954/products/skin1004_1024x1024.jpg"
      },
      {
        name: "Some By Mi AHA BHA",
        description: "Exfoliante químico suave para piel grasa",
        imgUrl: "https://cdn.shopify.com/s/files/1/0576/4642/8954/products/somebymi_1024x1024.jpg"
      }
    ];

    
    const productList = document.getElementById("product-list");

    productos.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="image-container">
          <img src="${producto.imgUrl}" alt="${producto.name}">
          <button class="add-button">Añadir</button>
        </div>
        <div class="info">
          <h3>${producto.name}</h3>
          <p>${producto.description}</p>
        </div>
      `;

      productList.appendChild(card);
    });



      productosGuardados.forEach(producto => {
        cartContainer.innerHTML += `
          <div class="card">
            <div class="image-container">
              <img src="${producto.imgUrl}" alt="${producto.name}">
            </div>
            <div class="info">
              <h3>${producto.name}</h3>
              <p>${producto.description}</p>
            </div>
          </div>
        `;
      });
    

    
  