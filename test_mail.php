<?php
// test_mail.php
$to = 'your_email@example.com'; // Replace with your email address
$subject = 'Test email';
$message = 'This is a test email from your PHP script.';
$headers = 'From: webmaster@example.com' . "\r\n" .
           'Reply-To: webmaster@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Failed to send email.';
}
?>
