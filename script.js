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
    var forms = document.querySelectorAll('form.contact-form');

    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!validateForm(form)) {
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                handleFormSubmission(event, form);
            }
        });
    });

    function validateForm(form) {
        var name = form.querySelector('#name').value.trim();
        var phone = form.querySelector('#phone').value.trim();
        var email = form.querySelector('#email').value.trim();
        var message = form.querySelector('#message').value.trim();
        var isValid = true;

        // Clear previous error messages
        form.querySelectorAll('.error').forEach(function(el) {
            el.textContent = '';
        });

        // Name validation
        if (name === '') {
            displayError(form, 'name', 'Name is required.');
            isValid = false;
        }

        // Email validation
        if (email === '') {
            displayError(form, 'email', 'Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            displayError(form, 'email', 'Invalid email format.');
            isValid = false;
        }

        // Phone validation
        if (phone === '') {
            displayError(form, 'phone', 'Phone number is required.');
            isValid = false;
        } else if (!validatePhone(phone)) {
            displayError(form, 'phone', 'Invalid phone number format.');
            isValid = false;
        }

        // Message validation
        if (message === '') {
            displayError(form, 'message', 'Message is required.');
            isValid = false;
        }

        return isValid;
    }

    function displayError(form, fieldId, message) {
        var field = form.querySelector('#' + fieldId);
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

    function handleFormSubmission(event, form) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(form);
        var button = form.querySelector('.submit-button'); // Target the button within the form

        fetch('process_form.php', { // Replace with the path to your PHP script
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Clear form fields
                form.reset();
                
                // Change button text to "Message Sent"
                button.value = 'Sent';
                button.classList.add('button-sent');
                button.textContent = 'Message Sent';
            } else {
                // Handle failure (optional)
                alert('Failed to send message. Please try again.');
            }
        })

        .catch(error => {
            // Handle network errors
            alert('An error occurred. Please try again.');
            console.error('Error:', error);
        });
}
});



    // if (form) {
    //     form.addEventListener('submit', function(event) {
    //         if (!validateForm()) {
    //             event.preventDefault();
    //         }
    //     });
    // }

    // function validateForm() {
    //     var name = document.getElementById('name').value.trim();
    //     var phone = document.getElementById('phone').value.trim();
    //     var email = document.getElementById('email').value.trim();
    //     var message = document.getElementById('message').value.trim();
    //     var isValid = true;

        // Clear previous error messages
        // document.querySelectorAll('.error').forEach(function(el) {
        //     el.textContent = '';
        // });

        // Name validation
        // if (name === '') {
        //     displayError('name', 'Name is required.');
        //     isValid = false;
        // }

        // Email validation
        // if (email === '') {
        //     displayError('email', 'Email is required.');
        //     isValid = false;
        // } else if (!validateEmail(email)) {
        //     displayError('email', 'Invalid email format.');
        //     isValid = false;
        // }

        // Phone validation
        // if (phone === '') {
        //     displayError('phone', 'Phone number is required.');
        //     isValid = false;
        // } else if (!validatePhone(phone)) {
        //     displayError('phone', 'Invalid phone number format.');
        //     isValid = false;
        // }

        // Message validation
    //     if (message === '') {
    //         displayError('message', 'Message is required.');
    //         isValid = false;
    //     }

    //     return isValid;
    // }

    // function displayError(fieldId, message) {
    //     var field = document.getElementById(fieldId);
    //     var error = field.nextElementSibling;
    //     if (!error || !error.classList.contains('error')) {
    //         error = document.createElement('div');
    //         error.classList.add('error');
    //         field.parentNode.insertBefore(error, field.nextSibling);
    //     }
    //     error.textContent = message;
    // }

    // function validateEmail(email) {
    //     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailPattern.test(email);
    // }

    // function validatePhone(phone) {
    //     var phonePattern = /^[0-9]{10,15}$/;
    //     return phonePattern.test(phone);
    // }