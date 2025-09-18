//DECLARACIÓN DE VARIABLES Y CONSTANTES//
const btnAbrirBienvenida = document.getElementById("btnAbrirBienvenida");
const popupBienvenida = document.getElementById("popupBienvenida");

const btnIniciarSesion = document.getElementById("btnIniciarSesion");
const bienvenidaContent = document.getElementById("bienvenidaContent");
const formLogin = document.getElementById("formLogin");

//ABRIR POPUP DE BIENVENIDA//
btnAbrirBienvenida.addEventListener("click", (e) => {
  e.preventDefault();
  popupBienvenida.style.display = "flex";
  bienvenidaContent.style.display = "block";
  formLogin.style.display = "none";
});

//MOSTRAR FORMULARIO DE INICIO DE SESIÓN//
btnIniciarSesion.addEventListener("click", () => {
  bienvenidaContent.style.display = "none";
  formLogin.style.display = "block";
  formRegistro.style.display = "none";
});

//CERRAR POPUP DE BIENVENIDA AL HACER CLIC FUERA DEL CONTENIDO//
popupBienvenida.addEventListener("click", (e) => {
  if (e.target === popupBienvenida) {
    popupBienvenida.style.display = "none";
    bienvenidaContent.style.display = "block";
    formLogin.style.display = "none";
    formRegistro.style.display = "none";
  }
});

//VALIDACIÓN DEL FORMULARIO DE INICIO DE SESIÓN//
const formulario = document.getElementById("formularioLogin");
const correoInput = document.getElementById("correo");
const contraseñaInput = document.getElementById("contraseña");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = correoInput.value.trim().toLowerCase();
  const contraseña = contraseñaInput.value.trim();
//VALIDACION DEL CORREO//
  if (!correo.endsWith("@gmail.com")) {
    correoInput.setCustomValidity("Solo se permiten correos @gmail.com");
    correoInput.reportValidity();
    return;
  } else {
    correoInput.setCustomValidity("");
  }
//VALIDACION DE LA CONTRASEÑA//
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
//MOSTRAR Y OCULTAR CONTRASEÑA EN INICIO DE SESION//
const togglePasswordBtn = document.getElementById("togglePassword");

togglePasswordBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const tipoActual = contraseñaInput.getAttribute("type");
  const esPassword = tipoActual === "password";

  contraseñaInput.setAttribute("type", esPassword ? "text" : "password");

  this.classList.toggle("bi-eye-slash-fill");
  this.classList.toggle("bi-eye-fill");
});
//DECLARACION DE VARIABLES Y CONSTANTES PARA EL FORMULARIO DE REGISTRO//
const formRegistro = document.getElementById("formRegistro");
const formularioRegistro = document.getElementById("formularioRegistro");
const correoRegistro = document.getElementById("correoRegistro");
const contraseñaRegistro = document.getElementById("contraseñaRegistro");
const togglePasswordRegistro = document.getElementById(
  "togglePasswordRegistro"
);
//MOSTRAR EL FORMULARIO DE CREAR CUENTA DESDE LA PANTALLA DE BIENVENIDA//
const btnCrearCuenta = bienvenidaContent.querySelectorAll(".btn-custom")[1];
btnCrearCuenta.addEventListener("click", () => {
  bienvenidaContent.style.display = "none";
  formLogin.style.display = "none";
  formRegistro.style.display = "block";
});
//IR DE CREAR CUENTA A INICIAR SESION//
const LinkIniciarSesion = document.getElementById("linkIniciarSesion");
LinkIniciarSesion.addEventListener("click", (e) => {
  e.preventDefault();
  formRegistro.style.display = "none";
  formLogin.style.display = "block";
});
//IR DE INICIAR SESION A CREAR CUENTA//
const LinkCrearCuenta = document.getElementById("linkCrearCuenta");
LinkCrearCuenta.addEventListener("click", (e) => {
  e.preventDefault();
  formLogin.style.display = "none";
  formRegistro.style.display = "block";
});
//VALIDACION DEL FORMULARIO DE CREAR CUENTA(REGISTRO)//
formularioRegistro.addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = correoRegistro.value.trim().toLowerCase();
  const contraseña = contraseñaRegistro.value.trim();
//VALIDACION DEL CORREO//
  if (!correo.endsWith("@gmail.com")) {
    correoRegistro.setCustomValidity("Solo se permiten correos @gmail.com");
    correoRegistro.reportValidity();
    return;
  } else {
    correoRegistro.setCustomValidity("");
  }
//VALIDACION DE LA CONTRASEÑA//
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
//MOSTRAR Y OCULTAR CONTRASEÑA EN CREAR CUENTA (REGISTRO)//
togglePasswordRegistro.addEventListener("click", function () {
  const tipo =
    contraseñaRegistro.getAttribute("type") === "password"
      ? "text"
      : "password";
  contraseñaRegistro.setAttribute("type", tipo);
  this.classList.toggle("bi-eye-fill");
  this.classList.toggle("bi-eye-slash-fill");
});
//CERRAR EL POPUP DE BIENVENIDA CON LA TECLA ESCAPE//
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popupBienvenida.style.display === "flex") {
    popupBienvenida.style.display = "none";
    bienvenidaContent.style.display = "block";
    formLogin.style.display = "none";
    formRegistro.style.display = "none";
  }
});
