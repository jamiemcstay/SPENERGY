# SP ENERGY Website

SP ENERGY is a comprehensive website for a solar panel installation service provider in Ireland. This project showcases a modern, user-friendly website designed to inform potential customers about solar energy solutions, services, SEAI grants, and allows users to contact the company via an integrated form.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
4. [Licences](#license)

## Project Overview

The SP ENERGY website provides information about solar panel installation services offered in Ireland. The website is designed with a clean and modern UI/UX approach, making it easy for users to navigate through the different sections such as Home, Home Solar, Other Services, Grants, and Contact Us.


## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
- **Contact Form**: A form that allows users to reach out for quotes or inquiries.
- **Dynamic Navigation Menu**: A responsive navigation menu with a toggle button for mobile devices.
- **Integration with EmailJS**: The contact form uses EmailJS to send form data directly to an email, making it easier to manage inquiries.
- **Error Handling and Validation**: Client-side form validation to ensure data integrity before submission.
- **External Links**: Easy access to SEAI grant information with a redirect function.

## Technologies Used

### 1. **HTML5**
   - The foundation of the website, providing structure and semantic meaning to the content.

### 2. **CSS3**
   - Custom styles for the layout and design are written in CSS, with a focus on a clean, modern, and responsive design.
   - Media queries are used to ensure the website is responsive across different devices.
   - Flexbox and Grid layout models are employed for arranging elements.

### 3. **JavaScript**
   - **DOM Manipulation**: JavaScript is used to handle events like menu toggling and form validation dynamically.
   - **Form Validation**: Client-side validation to ensure users provide necessary information in the correct format.
   - **EmailJS Integration**: JavaScript is used to connect the contact form with EmailJS, enabling direct email functionality without a backend server.
   - **Redirect Functionality**: JavaScript handles redirects to external websites, such as SEAI grants pages.

### 4. **FontAwesome**
   - Icons are added using FontAwesome to enhance the visual aesthetics of the site.

### 5. EmailJS Integration

EmailJS is used to handle form submissions on the website. Here's a brief overview of how it is integrated:

> **Initialization**

   EmailJS is initialized in the html files with script tag that contains a public key. This allows the client-side application to interact with EmailJS services.

   ```javascript
   emailjs.init({
       publicKey: "YOUR_PUBLIC_KEY_HERE"
   });
   ```

> **Form Submission Handling** 

When a user submits the contact form, the form data is sent to EmailJS using the emailjs.sendForm method. This method takes three parameters:

- service_id: The ID of the email service being used.
- template_id: The ID of the email template to be used.
- form: The form element containing the user input.

   ```javascript
   emailjs.sendForm('service_id', 'template_id', form)
      .then(function(response) {
         console.log('Success:', response);
         form.reset(); // Clear form fields
         var button = form.querySelector('.submit-button');
         button.value = 'Sent';
         button.id = 'button-sent';
      }, function(error) {
         console.error('Error:', error);
         alert('An error occurred. Please try again.');
      });
   ```


### 6. **Form Validation**
Before submission, the form is validated to ensure all required fields are filled out correctly. Validation checks include ensuring that the email format is valid and the phone number meets the required format.

### 7. **Version Control**

Git and GitHub were used for version control. 

## Testing

HTML, CSS, and javascript tested through w3 schools, jigaw and JSHint respectively.

## Licences

Hero section image:

Markus Spiske
> https://unsplash.com/@markusspiske

Who we are image:

Chelsea
>https://unsplash.com/@chelseadeeyo

Fonts (Gotham Light, Gotham Regular, Gotham Bold):

The Hoefler Type Foundry, Inc




