// Parte 1: control del popup //
const btnAbrirBienvenida = document.getElementById('btnAbrirBienvenida');
const popupBienvenida = document.getElementById('popupBienvenida');

const btnIniciarSesion = document.getElementById('btnIniciarSesion');
const bienvenidaContent = document.getElementById('bienvenidaContent');
const formLogin = document.getElementById('formLogin'); 

btnAbrirBienvenida.addEventListener('click', (e) => {
  e.preventDefault();
  popupBienvenida.style.display = 'flex';
  bienvenidaContent.style.display = 'block';
  formLogin.style.display = 'none';
});

btnIniciarSesion.addEventListener('click', () => {
  bienvenidaContent.style.display = 'none';
  formLogin.style.display = 'block';
});

popupBienvenida.addEventListener('click', (e) => {
  if (e.target === popupBienvenida) {
    popupBienvenida.style.display = 'none';
    bienvenidaContent.style.display = 'block';
    formLogin.style.display = 'none';
  }
});

// Parte 2: Validacion del formulario //
const formulario = document.getElementById('formularioLogin');
const correoInput = document.getElementById('correo');
const contraseñaInput = document.getElementById('contraseña');

formulario.addEventListener('submit', function (e) {
 e.preventDefault();

  const correo = correoInput.value.trim().toLowerCase();
  const contraseña = contraseñaInput.value.trim();

  if (!correo.endsWith('@gmail.com')) {
    correoInput.setCustomValidity('Solo se permiten correos @gmail.com');
    correoInput.reportValidity(); 
    return;
  } else {
    correoInput.setCustomValidity(''); 
  }

  if (contraseña.length < 6) {
    contraseñaInput.setCustomValidity('La contraseña debe tener al menos 6 caracteres.');
    contraseñaInput.reportValidity();
    return;
  } else {
    contraseñaInput.setCustomValidity('');
  }

  alert('Inicio de sesión exitoso!');
});

// Parte 3: Mostrar y ocultar contraseña //
const togglePasswordBtn = document.getElementById('togglePassword');

togglePasswordBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const tipoActual = contraseñaInput.getAttribute('type');
  const esPassword = tipoActual === 'password';

  contraseñaInput.setAttribute('type', esPassword ? 'text' : 'password');

  this.classList.toggle('bi-eye-slash-fill');
  this.classList.toggle('bi-eye-fill');
});

// Parte 4: Formulario registro //
const formRegistro = document.getElementById('formRegistro');
const formularioRegistro = document.getElementById('formularioRegistro');
const correoRegistro = document.getElementById('correoRegistro');
const contraseñaRegistro = document.getElementById('contraseñaRegistro');
const togglePasswordRegistro = document.getElementById('togglePasswordRegistro');

const btnCrearCuenta = bienvenidaContent.querySelectorAll('.btn-custom')[1];
btnCrearCuenta.addEventListener('click', () => {
  bienvenidaContent.style.display = 'none';
  formLogin.style.display = 'none';
  formRegistro.style.display = 'block';
});

const LinkIniciarSesion = document.getElementById('linkIniciarSesion');
LinkIniciarSesion.addEventListener('click', (e) => {
  e.preventDefault();
  formRegistro.style.display = 'none';
  formLogin.style.display = 'block';
});

formularioRegistro.addEventListener('submit', function (e) {
  e.preventDefault();

  const correo = correoRegistro.value.trim().toLowerCase();
  const contraseña = contraseñaRegistro.value.trim();

  if (!correo.endsWith('@gmail.com')) {
    correoRegistro.setCustomValidity('Solo se permiten correos @gmail.com');
    correoRegistro.reportValidity();
    return;
  } else {
    correoRegistro.setCustomValidity('');
  }

  if (contraseña.length < 6) {
    contraseñaRegistro.setCustomValidity('La contraseña debe tener al menos 6 caracteres.');
    contraseñaRegistro.reportValidity();
    return;
  } else {
    contraseñaRegistro.setCustomValidity('');
  }

  alert('Registro exitoso! Por favor, inicia sesión.');
});

togglePasswordRegistro.addEventListener('click', function () {
  const tipo = contraseñaRegistro.getAttribute('type') === 'password' ? 'text' : 'password';
  contraseñaRegistro.setAttribute('type', tipo);
  this.classList.toggle('bi-eye-fill');
  this.classList.toggle('bi-eye-slash-fill');
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && popupBienvenida.style.display === 'flex') {
    popupBienvenida.style.display = 'none';
    bienvenidaContent.style.display = 'block';
    formLogin.style.display = 'none';
    formRegustro.style.display = 'none';
  }
});