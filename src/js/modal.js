(() => {
  const refs = {
    openModalBtn: document.querySelector('.btn-about'),
    closeModalBtn: document.querySelector('.modal-close'),
    modal: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
    map: document.querySelector('.contacts__button--locations'),
    btnMap: document.querySelector('.btn-modal'),
    modalMap: document.querySelector('.backdrop-map'),
  };

  console.log(refs.map);
  console.log(refs.btnMap);

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.map.addEventListener('click', map);
  refs.btnMap.addEventListener('click', map);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
  }
  function map() {
    document.body.classList.toggle('no-scroll');
    refs.modalMap.classList.toggle('is-hidden');
  }
})();
