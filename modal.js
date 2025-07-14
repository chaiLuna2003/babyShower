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


