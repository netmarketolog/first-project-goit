(() => {
    const refs = {
        openModalBtn: document.querySelector(".btn-about"),
        closeModalBtn: document.querySelector(".modal-close"),
        modal: document.querySelector(".backdrop"),
        body: document.querySelector('body')
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("no-scroll");
        refs.modal.classList.toggle("is-hidden");
    }
})();