<?php
// Simple PHP mail test script
$to = 'your-email@example.com';
$subject = 'Test Mail';
$message = 'This is a test mail from PHP.';
$headers = 'From: no-reply@example.com' . "\r\n" .
           'Reply-To: no-reply@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Mail sent successfully.';
} else {
    echo 'Failed to send mail.';
}
?>
