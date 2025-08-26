<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    # Your email
    $mail_to = "jasminder@scaleus.in";

    # Sanitize input
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $techstack = htmlspecialchars($_POST["techstack"]);
    $message = htmlspecialchars(trim($_POST["message"]));

    # Validate fields
    if (empty($name) || empty($email) || empty($message) || empty($techstack)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    # Handle File Upload
    $resume = $_FILES["resume"];
    $allowed_ext = "pdf";
    $max_size = 5 * 1024 * 1024; // 5 MB

    if ($resume["error"] == UPLOAD_ERR_OK) {
        $file_ext = strtolower(pathinfo($resume["name"], PATHINFO_EXTENSION));
        if ($file_ext !== $allowed_ext) {
            http_response_code(400);
            echo "Only PDF files are allowed.";
            exit;
        }
        if ($resume["size"] > $max_size) {
            http_response_code(400);
            echo "File size must not exceed 5MB.";
            exit;
        }

        # Move file to server (optional: adjust path)
        $upload_dir = __DIR__ . "/uploads/";
        if (!is_dir($upload_dir)) mkdir($upload_dir, 0777, true);
        $file_path = $upload_dir . basename($resume["name"]);
        move_uploaded_file($resume["tmp_name"], $file_path);
    } else {
        http_response_code(400);
        echo "Error uploading resume.";
        exit;
    }

    # Email content
    $subject = "New Contact Form Submission";
    $content = "Name: $name\n";
    $content .= "Email: $email\n";
    $content .= "Tech Stack: $techstack\n\n";
    $content .= "Message:\n$message\n";
    $content .= "Resume: $file_path\n";

    $headers = "From: $name <$email>";

    # Send Email (without attachment, just link to file)
    $success = mail($mail_to, $subject, $content, $headers);

    if ($success) {
        http_response_code(200);
        echo "Thank you! Your application has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }

} else {
    http_response_code(403);
    echo "Invalid request.";
}
?>
