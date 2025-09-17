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
 // const styleSheet = document.createElement("style");
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// FILL PRODUCTS
const bigProductsData = [
  {
    name: "SKIN1004",
    description: "Reparación delicada",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_skin1004.jpg&w=640&q=80",
  },
  {
    name: "Dear, Klairs",
    description: "Hidratante iluminador",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_dear_klairs.jpg&w=640&q=80",
  },
  {
    name: "Abib",
    description: "Revitaliza tu mirada",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_abib.jpg&w=640&q=80",
  },


  {
    name: "NINELESS",
    description: "Piel impecable",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_nineless.jpg&w=640&q=80",
  },

  {
    name: "LAKA",
    description: "Dúo de tintes frutales",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_laka.jpg&w=640&q=80",
  },


    {
    name: "TOCOBO",
    description: "Brillo intenso",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_tocobo.jpg&w=640&q=80",
  },

  

    {
    name: "Rohto",
    description: "Cuidado intensivo",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk25/pb_rohto_mentholatum.jpg&w=640&q=80",
  },


   {
    name: "House of Hu",
    description: "Textura ligera",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_house_of_hur.jpg&w=640&q=80"
      
  },


  {
    name: "",
    description: "",
    imgUrl:
      
      
  },

    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },


    {
    name: "",
    description: "",
    imgUrl:
      
      
  },

  


];

let bigProductContainer = document.querySelector("#big-product-container");

for (let i = 0; i < bigProductsData.length; i++) {
  bigProductContainer.innerHTML += `
    <div class="card">
      <div class="image-container">
        <img
          src="${bigProductsData[i].imgUrl}"
          alt="${bigProductsData[i].name}"
        />
        <button class="add-button">Añadir</button>
      </div>
      <div class="info">
        <h3>${bigProductsData[i].name}</h3>
        <p>${bigProductsData[i].description}</p>
      </div>
    </div>
    `;
}

// productos.forEach((producto) => {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   card.innerHTML = `
//         <div class="image-container">
//           <img src="${producto.imgUrl}" alt="${producto.name}">
//           <button class="add-button">Añadir</button>
//         </div>
//         <div class="info">
//           <h3>${producto.name}</h3>
//           <p>${producto.description}</p>
//         </div>
//       `;

//   productList.appendChild(card);
// });

// productosGuardados.forEach((producto) => {
//   cartContainer.innerHTML += `
//           <div class="card">
//             <div class="image-container">
//               <img src="${producto.imgUrl}" alt="${producto.name}">
//             </div>
//             <div class="info">
//               <h3>${producto.name}</h3>
//               <p>${producto.description}</p>
//             </div>
//           </div>
//         `;
// });

// mostrarProductos();

    

    







































      
  