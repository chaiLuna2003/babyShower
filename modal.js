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

