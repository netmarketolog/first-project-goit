refs = {
  sliderLine: document.querySelector('.slider-line'),
  btnLeft: document.querySelector('.product-box__btn--left'),
  btnRight: document.querySelector('.product-box__btn--right'),
};

let offset = 0;

refs.btnLeft.addEventListener('click', onBtnLeft);
refs.btnRight.addEventListener('click', onBtnRight);

function onBtnLeft() {
  offset -= 415;
  if (offset < 0) {
    offset = 830;
  }
  refs.sliderLine.style.left = `-${offset}px`;
}

function onBtnRight() {
  offset += 415;
  if (offset > 830) {
    offset = 0;
  }
  refs.sliderLine.style.left = `-${offset}px`;
}
