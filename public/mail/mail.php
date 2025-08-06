<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    # Replace this email with your email address
    $mail_to = "jasminder@scaleus.in";
    
    # Sender Data
    $subject = "New Contact Form Submission";
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($message)) {
        # Set a 400 (bad request) response code and exit
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    # Email content
    $content = "Name: $name\n";
    $content .= "Email: $email\n\n";
    $content .= "Message:\n$message\n";

    # Email headers
    $headers = "From: $name <$email>";

    # Send the email
    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        # Set a 200 (okay) response code
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        # Set a 500 (internal server error) response code
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }

} else {
    # Not a POST request, set a 403 (forbidden) response code
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
