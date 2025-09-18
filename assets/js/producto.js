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
    name: "Medi Peel",
    description: "Peeling eficaz",
    imgUrl:
        "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk37/pb_medi_peel.jpg&w=640&q=80"
  },

    {
    name: "LANEIGE ",
    description: " Labios suaves y rellenos",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/laneige-lip-sleeping-mask-ex-mini-3g/47/238/XXL_p0099423847.jpg"

  },


    {
    name: "NEEDLY ",
    description: "Crema para ojos",
    imgUrl:

     "https://d1flfk77wl2xk4.cloudfront.net/Assets/05/459/XXL_p0150945905.jpg"
  },


    {
    name: "Glow Stick",
    description: "Corrector en crema",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/92/232/XXL_p0212123292.jpg"
  },


    {
    name: "TOCOBO",
    description: "Duo de Bloqueador solar",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/tocobo-cotton-soft-sun-stick-bundle-set-2-pcs/44/294/XXL_p0219429444.jpg"

  },


    {
    name: "ATUDE",
    description: "Base facial",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/etude-double-lasting-foundation-new-12-colors/75/266/L_p0130326675.jpg"

  },


    {
    name: "MADICUBE",
    description: "Mascarilla facial",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/medicube-collagen-night-wrapping-mask-bundle-set-2-pcs/86/380/XXL_p0219538086.jpg"

  },


    {
    name: "KSECRET",
    description: "Contorno de ojos",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/ksecret-seoul-1988-eye-cream-retinal-liposome-4-fermented-bean-30ml/20/371/XXL_p0212137120.jpg"

  },


    {
    name: "TIRTI",
    description: "Tinta Lbial",
    imgUrl:

      "https://d1flfk77wl2xk4.cloudfront.net/Assets/tirtir-waterism-glow-tint-mini-30-colors/89/316/XXL_p0214831689.jpg"
  },


    {
    name: "PERIPERA",
    description: "Mascarilla para cejas",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/08/159/M_p0178115908.jpg"
  },


    {
    name: "NOVO",
    description: "Crema de manos",
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/78/536/M_p0216553678.jpg"
  },


 {
    name: "CORSX",
    description: "Piel Suave",
    imgUrl:
      "https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/25wk36/pb_cosrx.jpg&w=640&q=80"
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








const productscontainerData = [
  {
    name: "Glutathione",
    description: "Crema facial",
    price: 20.0,
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/71/468/M_p0193746871.jpg",
  },


   {
    name: "Colorgram",
    description: "Gloss con color",
    price: 9.99 ,
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/20/113/M_p0198711320.jpg",
  },

  {
    name: "Joocyee",
    description: "Rubor en barra",
    price:10.89 ,
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/39/937/M_p0218793739.jpg",
  },

  {
    name: "Shanteel",
    description: "Polvo compacto",
    price: 12.99 ,
    imgUrl:
    "https://d1flfk77wl2xk4.cloudfront.net/Assets/02/976/M_p0220697602.jpg"

  },

  {
    name: "Centella",
    description: "Tonico Facial",
    price: 19.99,
    imgUrl:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/49/215/M_p0114021549.jpg"

  },

  {
    name: "TORRIDEN",
    description: "Hyaluronic",
    price:12.90 ,
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/96/252/M_p0203225296.jpg",
  },

    {
    name: "SKIN 1004",
    description: "Protector solar",
    price:17.00,
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/29/273/M_p0193127329.jpg",
  },

    {
    name: "CANMAKE",
    description: "Sombra de ojos",
    price:7.93 ,
    imgUrl:
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/24/303/M_p0209430324.jpg",
  },

];

let productcontainer = document.querySelector("#product-container");


for (let i = 0; i < productscontainerData.length; i++) {
  productcontainer.innerHTML += `
    <div class="product-card">
      <div class="img-1">
        <img
          src="${productscontainerData[i].imgUrl}"
          alt="${productscontainerData[i].name}"
        />
        <button class="add-button">Añadir</button>
      </div>
      <div class="info">
        <h3>${productscontainerData[i].name}</h3>
        <p>${productscontainerData[i].description}</p>
        <b>$${productscontainerData[i].price.toFixed(2)}</b>
      </div>
    </div>
  `;
}






































