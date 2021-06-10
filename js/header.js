document.querySelector('.header').querySelector('.lang-select__header').addEventListener('click', () => {
    document.querySelector('.header').querySelector('.lang-list').classList.toggle('lang-list--show');
});
document.querySelector('.header').querySelector('.lang-list').querySelectorAll('li').forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector('.header').querySelector('.lang-list').classList.toggle('lang-list--show');
    });
})
document.querySelector('.header').querySelector('.lang-list').addEventListener('mouseleave', () => {
    document.querySelector('.header').querySelector('.lang-list').classList.toggle('lang-list--show');
})