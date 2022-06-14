(() => {
    const refs = {
        openMenuBtn: document.querySelector(".header-menu__open"),
        closeMenuBtn: document.querySelector(".mob-menu__close"),
        menu: document.querySelector(".mob-menu"),
        body: document.querySelector('body')
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
        refs.body.classList.toggle('no-scroll');
    }
})();




(() => {
    const refs = {
        openModalBtn: document.querySelector(".tab-button__order"),
        closeModalBtn: document.querySelector(".modal-button"),
        modal: document.querySelector(".modal-one"),
        body: document.querySelector('body')

    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("no-scroll");
        refs.modal.classList.toggle("is-hidden");
    }
})();

// (() => {
//     const refs = {
//         openModalBtn: document.querySelector(".button__order"),
//         closeModalBtn: document.querySelector(".modal-button"),
//         modal: document.querySelector(".modal-one"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//         document.body.classList.toggle("no-scroll");
//         refs.modal.classList.toggle("is-hidden");
//     }
// })();