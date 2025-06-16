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