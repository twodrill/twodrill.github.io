document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.sidebar-toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
