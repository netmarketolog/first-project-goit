(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu__open'),
    closeMenuBtn: document.querySelector('.mob-menu__close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.tab-button__order'),
    openModalMobileBtn: document.querySelector('.button__order'),
    closeModalBtn: document.querySelector('.modal-button'),
    modal: document.querySelector('.modal-one'),
    body: document.querySelector('body'),
  };

  const form = document.getElementById('order-form');
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', handleForm);
  // disable refresh page

  refs.openModalMobileBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalTwoBtn: document.querySelector('.button__submit'),
    closeModal1Btn: document.querySelector('.modal-button'),
    closeModal2Btn: document.querySelector('.modal-button-two'),
    modal1: document.querySelector('.modal-one'),
    modal2: document.querySelector('.modal-two'),
    body: document.querySelector('body'),
  };

  refs.openModalTwoBtn.addEventListener('click', onSubmit);

  function onSubmit() {
    refs.modal1.classList.toggle('is-hidden');
    refs.modal2.classList.toggle('is-hidden-two');
  }

  refs.closeModal1Btn.addEventListener('click', closeModal_);
  refs.closeModal2Btn.addEventListener('click', closeModal2);

  function closeModal_() {
    document.body.classList.toggle('no-scroll');
    refs.modal2.classList.toggle('is-hidden');
  }

  function closeModal2() {
    document.body.classList.toggle('no-scroll');
    refs.modal2.classList.toggle('is-hidden-two');
  }
})();
