<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "jamie@spenergy.ie"; // Replace with your email address
    $subject = "Test Email";
    $message = "This is a test email sent from PHP's mail() function.";
    $headers = "From: webmaster@example.com"; // Replace with a valid sender email address

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo '<form method="post" action="">
            <input type="submit" value="Send Test Email">
          </form>';
}
?>
