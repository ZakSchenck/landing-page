let hamburger = document.querySelector('.container');
let menu = document.querySelector('.menu-item-container');
let header = document.querySelector('.header-container')
hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
})

