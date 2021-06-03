const partnersSlider = document.querySelector('.home .partners .partners-slider');
const carousel = partnersSlider.querySelector('ul');
const elementCount = carousel.querySelectorAll('li').length;
carousel.style.width = elementCount * 180 + 'px';
let index = 0;

const sliderBtnPrev = document.querySelector('.home .partners .slider__btn--back');
const sliderBtnNext = document.querySelector('.home .partners .slider__btn--next');

sliderBtnPrev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        shiftSlider(index);
    }
})
sliderBtnNext.addEventListener('click', () => {
    if (index < elementCount - 6) {
        index++;
        shiftSlider(index);
    }
})

const shiftSlider = (newIndex) => {
    carousel.style.transform = `translateX(-${newIndex / elementCount * 100}%)`
}