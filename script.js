function redirectToSEAI() {
    var url = 'https://www.seai.ie/grants/business-grants/' +
              'commercial-solar-pv/';
    window.open(url, '_blank');
}

// DOMContentLoaded event listener if you have other functionality
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});