<?php
dd($_SERVER["REQUEST_METHOD"]);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require __DIR__ . '/src/Exception.php';
require __DIR__ . '/src/PHPMailer.php';
require __DIR__ . '/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    dd("qfweugbwiugbuesilglueigerguiarlugb");
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jasminder@scaleus.in';
        $mail->Password = 'Jaspal@67';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('jasminder@scaleus.in', 'Scale Us Website');
        $mail->addAddress('jasminder@scaleus.in', 'Jasminder');

        $mail->isHTML(true);

        // Check if it's a subscription or contact form
        if (isset($_POST['subscribe_email'])) {
            // Subscription form
            $subscriberEmail = $_POST['subscribe_email'];
            $mail->Subject = 'New Subscription - Scale Us Website';
            $mail->Body    = "A new user has subscribed with the email: <b>$subscriberEmail</b>";
            $mail->AltBody = "A new user has subscribed with the email: $subscriberEmail";
        } else {
            // Contact form
            $name = $_POST['name'] ?? 'Not provided';
            $email = $_POST['email'] ?? 'Not provided';
            $message = $_POST['message'] ?? 'Not provided';

            $mail->Subject = 'Contact Form Submission - Scale Us Website';
            $mail->Body    = "
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Message:</strong> $message</p>
            ";
            $mail->AltBody = "New Contact Form Submission\n\nName: $name\nEmail: $email\nMessage: $message";
        }

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Thank you! We will respond shortly!']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}