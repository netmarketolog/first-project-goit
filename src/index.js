(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-menu__open"),
    closeMenuBtn: document.querySelector(".mob-menu__close"),
    menu: document.querySelector(".mob-menu"),
    header: document.querySelector('body')
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.header.classList.toggle('no-scroll');

  }
})(); 