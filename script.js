function redirectToSEAI() {
    var url = 'https://www.seai.ie/grants/business-grants/' +
              'commercial-solar-pv/';
    window.open(url, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // Form validation on submit
    var form = document.getElementById('home-page-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    function validateForm() {
        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        var isValid = true;

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(function(el) {
            el.textContent = '';
        });

        // Name validation
        if (name === '') {
            displayError('name', 'Name is required.');
            isValid = false;
        }

        // Email validation
        if (email === '') {
            displayError('email', 'Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            displayError('email', 'Invalid email format.');
            isValid = false;
        }

        // Phone validation
        if (phone === '') {
            displayError('phone', 'Phone number is required.');
            isValid = false;
        } else if (!validatePhone(phone)) {
            displayError('phone', 'Invalid phone number format.');
            isValid = false;
        }

        // Message validation
        if (message === '') {
            displayError('message', 'Message is required.');
            isValid = false;
        }

        return isValid;
    }

    function displayError(fieldId, message) {
        var field = document.getElementById(fieldId);
        var error = field.nextElementSibling;
        if (!error || !error.classList.contains('error')) {
            error = document.createElement('div');
            error.classList.add('error');
            field.parentNode.insertBefore(error, field.nextSibling);
        }
        error.textContent = message;
    }

    function validateEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        var phonePattern = /^[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }

    
});