<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form was submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Define the recipient email address
    $to = 'jamie@spenergy.ie';
    
    // Define the subject of the email
    $subject = 'Contact Form Submission from ' . $name;
    
    // Set up the email headers
    $headers = 'From: jamie@spenergy.ie' . "\r\n" .
                'Reply-To: ' . $email . "\r\n" .
                'Content-Type: text/html; charset=UTF-8' . "\r\n";
    
    // Create the email body content
    $body = "<h2>Contact Form Submission</h2>
             <p><strong>Name:</strong> $name</p>
             <p><strong>Phone:</strong> $phone</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Message:</strong><br>$message</p>";


    // Send the email
    $success = mail($to, $subject, $body, $headers);

    // Return a JSON response indicating success or failure
    header('Content-Type: application/json');
    echo json_encode(['success' => $success]);
} else {
    // Redirect to the home page if the form is not submitted via POST
    header('Location: index.html');
    exit();

}
    
?>