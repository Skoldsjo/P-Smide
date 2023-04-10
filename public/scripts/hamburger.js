const menuBtn = document.querySelector('.menu-icon');
const menuList = document.querySelector('.small-menu-container');
const navbar = document.getElementById('navbar');
const menuLinks = document.querySelectorAll('.menu-text');

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('is-visible')
});

menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // e.preventDefault();
        // const el = e.target;
        // const url = el.dataset.href;

        // window.scrollTo(0, 0);

        // const sectionTop = document.querySelector(url).getBoundingClientRect().top;

        // window.scrollTo(0, (sectionTop - navbar.offsetHeight));
    })
});