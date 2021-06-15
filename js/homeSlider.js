const partnersSlider = document.querySelector('.home .partners .partners-slider');
const carousel = partnersSlider.querySelector('ul');
const elementCount = carousel.querySelectorAll('li').length;
carousel.style.width = elementCount * 180 + 'px';
let index = 0;

const isMobile = window.innerWidth < 500;
console.log(isMobile);
const sliderBtnPrev = document.querySelector('.home .partners .slider__btn--back');
const sliderBtnNext = document.querySelector('.home .partners .slider__btn--next');

sliderBtnPrev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        shiftSlider();
    }
})
sliderBtnNext.addEventListener('click', () => {
    if (isMobile && index < elementCount - 1) {
        index++;
        shiftSlider();
    }
    else if (index < elementCount - 6) {
        index++;
        shiftSlider();
    }
})

const shiftSlider = () => {
    carousel.style.transform = `translateX(-${index / elementCount * 100}%)`
}