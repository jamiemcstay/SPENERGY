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
    // Display errors
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

        console.log('Form data before submission:');
        formData.forEach((value, key) => console.log(key, value))

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        
        .then(response => {
            console.log('Response status:', response.status); // Debug: log response status
            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText); // Trigger the catch block if the response is not OK
            }
            return response.json();
        })
        .then(data => {
            console.log('Response data:', data); // Debug: log response data
            if (data.success) {
                // Clear form fields
                form.reset();
                button.value = 'Sent';
                button.id = 'button-sent';
                // Display success message to user
                alert('Email sent successfully!');
            } else {
                alert('Failed to send message. Please try again.' +(data.message || ''));
            }
        })

        .catch(error => {
            // Handle network errors
            alert('An error occurred. Please try again.');
            console.error('Error:', error);
        });
}
});