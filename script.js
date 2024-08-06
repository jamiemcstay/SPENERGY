document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});