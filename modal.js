  const toggleBtn = document.querySelector(".menu-toggle");
      const menu = document.querySelector(".menu");

      toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
      });


const toggleBtns = document.querySelector(".boton");
const menus = document.querySelector(".modal");

toggleBtns.addEventListener("click", ()=>{
  menus.classList.toggle("active");
});

const modal = document.getElementById('modalAyuda');
  const abrir = document.getElementById('abrirModal');
  const cerrar = document.getElementById('cerrarModal');

  abrir.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cierra al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });


  const countdown = () => {
  // Cambia esta fecha al día/hora de tu evento
  const eventDate = new Date('2025-09-06T14:00:00').getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById('dias').innerText = days.toString().padStart(2, '0');
  document.getElementById('horas').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutos').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('segundos').innerText = seconds.toString().padStart(2, '0');

  if (gap < 0) {
    document.getElementById('countdown').innerText = "¡El evento ha comenzado!";
    clearInterval(timer);
  }
};

// Actualiza cada segundo
const timer = setInterval(countdown, 1000);
countdown();



