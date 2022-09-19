refs = {
  slider: document.querySelector('.slider'),
  sliderLine: document.querySelector('.slider-line'),
  btnLeft: document.querySelector('.product-box__btn--left'),
  btnRight: document.querySelector('.product-box__btn--right'),
};

let count = 0;
let sliderWidth;
let sliderLength = refs.sliderLine.children.length;

refs.btnLeft.addEventListener('click', onBtnLeft);
refs.btnRight.addEventListener('click', onBtnRight);

window.addEventListener('resize', init);
init();

function init() {
  sliderWidth = refs.slider.offsetWidth;
  refs.sliderLine.style.width = `${sliderWidth * sliderLength}px`;
  browseSlider();
}

function onBtnLeft() {
  count -= 1;
  if (count < 0) {
    count = sliderLength - 1;
  }
  browseSlider();
}

function onBtnRight() {
  count += 1;
  if (count >= sliderLength) {
    count = 0;
  }
  browseSlider();
}

function browseSlider() {
  refs.sliderLine.style.transform = `translate(-${count * sliderWidth}px)`;
}
