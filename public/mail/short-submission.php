<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    # Replace this email with your email address
    $mail_to = "jasminder@scaleus.in";
    
    # Sender Data
    $subject = "New Subscription Request";
    $email = trim($_POST["subscribe_email"]);

    if (empty($email)) {
        # Set a 400 (bad request) response code and exit
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    # Email content
    $content = "Email: $email\n";

    # Email headers
    $headers = "From: Subscription Form <$email>";

    # Send the email
    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        # Set a 200 (okay) response code
        http_response_code(200);
        echo "Thank you! Your subscription request has been sent.";
    } else {
        # Set a 500 (internal server error) response code
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your request.";
    }

} else {
    # Not a POST request, set a 403 (forbidden) response code
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
