<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', '/var/log/php_errors.log');


// Check if the form was submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $recaptchaResponse = $_POST['g-recaptcha-response']; // Get the reCAPTCHA response

    // Define the reCAPTCHA secret key for testing
    $secret = '6LeIxAcTAAAAAOba02C2Q2s5sR11p0jK4I9T3b7E'; // Test secret key

    // Build the verification URL
    $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $response = file_get_contents($verifyUrl . '?secret=' . urlencode($secret) . '&response=' . urlencode($recaptchaResponse));
    
    // Decode the response
    $responseKeys = json_decode($response, true);   

    error_log("reCAPTCHA response: " . print_r($responseKeys, true));

    error_log("reCAPTCHA response token: " . $recaptchaResponse);
    

    // Check if reCAPTCHA verification succeeded
    if (intval($responseKeys["success"]) !== 1) {
        // Log error codes for debugging
        $errorCodes = isset($responseKeys["error-codes"]) ? $responseKeys["error-codes"] : 'No error codes returned';
        if (is_array($errorCodes)) {
            $errorCodes = implode(', ', $errorCodes); // Convert array to comma-separated string
        }
        error_log("reCAPTCHA verification failed: " . $errorCodes);
        
        // Return a JSON response indicating failure
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'reCAPTCHA verification failed.']);
        exit();
    }

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