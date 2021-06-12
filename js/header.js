const header = document.querySelector('.header');
const toggleLangList = () => {
    header.querySelector('.lang-list').classList.toggle('lang-list--show');
}
document.querySelector('.lang-select__header').addEventListener('click', toggleLangList);
document.querySelector('.lang-list').querySelectorAll('li').forEach((e) => {
    e.addEventListener('click', toggleLangList);
})
header.querySelector('.lang-list').addEventListener('mouseleave', toggleLangList);
header.querySelector('.header__mobile-toggle').addEventListener('click', (e) => {
    //  document.querySelector('.header-upper').classList.toggle('header-upper--full');
    header.querySelector('.mobile-menu').classList.toggle('mobile-menu--active');
    document.querySelector('.header__mobile-toggle').classList.toggle('header__mobile-toggle--active');
    document.querySelector('body').classList.toggle('body--fixed');
})
header.querySelectorAll('.mobile-menu .drop-header').forEach((e, i) => e.addEventListener('click', () => {
    let wasSelectedActive = null;
    if (header.querySelector('.drop--active')) {
        if (header.querySelector('.drop--active') === header.querySelectorAll('.mobile-menu .drop')[i]) {
            wasSelectedActive = true;
        }

        const prevActive = header.querySelector('.drop--active');
        !wasSelectedActive && prevActive.classList.remove('drop--active');
    }
    const selectedElement = header.querySelectorAll('.mobile-menu .drop')[i];
    console.log(selectedElement)
    selectedElement.classList.toggle('drop--active');
}))