const btnAbrirBienvenida = document.getElementById("btnAbrirBienvenida");
const popupBienvenida = document.getElementById("popupBienvenida");

const btnIniciarSesion = document.getElementById("btnIniciarSesion");
const bienvenidaContent = document.getElementById("bienvenidaContent");
const formLogin = document.getElementById("formLogin");

btnAbrirBienvenida.addEventListener("click", (e) => {
  e.preventDefault();
  popupBienvenida.style.display = "flex";
  bienvenidaContent.style.display = "block";
  formLogin.style.display = "none";
});

btnIniciarSesion.addEventListener("click", () => {
  bienvenidaContent.style.display = "none";
  formLogin.style.display = "block";
  formRegistro.style.display = "none";
});

popupBienvenida.addEventListener("click", (e) => {
  if (e.target === popupBienvenida) {
    popupBienvenida.style.display = "none";
    bienvenidaContent.style.display = "block";
    formLogin.style.display = "none";
    formRegistro.style.display = "none";
  }
});

const formulario = document.getElementById("formularioLogin");
const correoInput = document.getElementById("correo");
const contraseñaInput = document.getElementById("contraseña");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = correoInput.value.trim().toLowerCase();
  const contraseña = contraseñaInput.value.trim();

  if (!correo.endsWith("@gmail.com")) {
    correoInput.setCustomValidity("Solo se permiten correos @gmail.com");
    correoInput.reportValidity();
    return;
  } else {
    correoInput.setCustomValidity("");
  }

  if (contraseña.length < 6) {
    contraseñaInput.setCustomValidity(
      "La contraseña debe tener al menos 6 caracteres."
    );
    contraseñaInput.reportValidity();
    return;
  } else {
    contraseñaInput.setCustomValidity("");
  }

  alert("Inicio de sesión exitoso!");
});

const togglePasswordBtn = document.getElementById("togglePassword");

togglePasswordBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const tipoActual = contraseñaInput.getAttribute("type");
  const esPassword = tipoActual === "password";

  contraseñaInput.setAttribute("type", esPassword ? "text" : "password");

  this.classList.toggle("bi-eye-slash-fill");
  this.classList.toggle("bi-eye-fill");
});

const formRegistro = document.getElementById("formRegistro");
const formularioRegistro = document.getElementById("formularioRegistro");
const correoRegistro = document.getElementById("correoRegistro");
const contraseñaRegistro = document.getElementById("contraseñaRegistro");
const togglePasswordRegistro = document.getElementById(
  "togglePasswordRegistro"
);

const btnCrearCuenta = bienvenidaContent.querySelectorAll(".btn-custom")[1];
btnCrearCuenta.addEventListener("click", () => {
  bienvenidaContent.style.display = "none";
  formLogin.style.display = "none";
  formRegistro.style.display = "block";
});

const LinkIniciarSesion = document.getElementById("linkIniciarSesion");
LinkIniciarSesion.addEventListener("click", (e) => {
  e.preventDefault();
  formRegistro.style.display = "none";
  formLogin.style.display = "block";
});

const LinkCrearCuenta = document.getElementById("linkCrearCuenta");
LinkCrearCuenta.addEventListener("click", (e) => {
  e.preventDefault();
  formLogin.style.display = "none";
  formRegistro.style.display = "block";
});

formularioRegistro.addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = correoRegistro.value.trim().toLowerCase();
  const contraseña = contraseñaRegistro.value.trim();

  if (!correo.endsWith("@gmail.com")) {
    correoRegistro.setCustomValidity("Solo se permiten correos @gmail.com");
    correoRegistro.reportValidity();
    return;
  } else {
    correoRegistro.setCustomValidity("");
  }

  if (contraseña.length < 6) {
    contraseñaRegistro.setCustomValidity(
      "La contraseña debe tener al menos 6 caracteres."
    );
    contraseñaRegistro.reportValidity();
    return;
  } else {
    contraseñaRegistro.setCustomValidity("");
  }

  alert("Registro exitoso! Por favor, inicia sesión.");
});

togglePasswordRegistro.addEventListener("click", function () {
  const tipo =
    contraseñaRegistro.getAttribute("type") === "password"
      ? "text"
      : "password";
  contraseñaRegistro.setAttribute("type", tipo);
  this.classList.toggle("bi-eye-fill");
  this.classList.toggle("bi-eye-slash-fill");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popupBienvenida.style.display === "flex") {
    popupBienvenida.style.display = "none";
    bienvenidaContent.style.display = "block";
    formLogin.style.display = "none";
    formRegistro.style.display = "none";
  }
});

let tarjetas = 0; // contador de tarjetas

// elementos del DOM
const cartCounter = document.getElementById("cartCounter");
const promoNotificacion = document.getElementById("promoNotificacion");
const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));

// seleccionar todos los botones "Añadir"
const addButtons = document.querySelectorAll(".add-button");

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    tarjetas++;
    cartCounter.textContent = `${tarjetas} 🎟️`;

    // si se llega a 2 tarjetas → desbloquea regalo
    if (tarjetas % 2 === 0) {
      mostrarNotificacion();
      promoModal.show();
    }
  });
});

// función para mostrar la notificación flotante
function mostrarNotificacion() {
  promoNotificacion.classList.add("show");

  setTimeout(() => {
    promoNotificacion.classList.remove("show");
  }, 3000); // desaparece después de 3s
}
