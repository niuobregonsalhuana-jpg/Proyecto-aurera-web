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