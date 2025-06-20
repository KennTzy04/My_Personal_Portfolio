<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for JSON response
header('Content-Type: application/json');

// Check if composer autoload exists
if (!file_exists(__DIR__ . '/../vendor/autoload.php')) {
    echo json_encode(['status' => 'error', 'message' => 'Composer autoload not found. Please run composer install.']);
    exit;
}

require __DIR__ . '/../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $firstName = filter_var($_POST['firstName'], FILTER_SANITIZE_STRING);
    $lastName = filter_var($_POST['lastName'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email format']);
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Enable SMTP debugging
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kenncasing04@gmail.com';
        $mail->Password = 'xfee uhsd tzfc lyvu';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';

        // Enable verbose debug output
        $mail->Debugoutput = function($str, $level) {
            error_log("PHPMailer: $str");
        };

        // Recipients
        $mail->setFrom($email, $firstName . ' ' . $lastName);
        $mail->addAddress('kenncasing04@gmail.com', 'Kenneth Casing');
        $mail->addReplyTo($email, $firstName . ' ' . $lastName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission from Portfolio Website';
        $mail->Body = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {$firstName} {$lastName}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Message:</strong></p>
            <p>{$message}</p>
        ";

        // Send email
        if ($mail->send()) {
            echo json_encode(['status' => 'success', 'message' => 'Message has been sent successfully!']);
        } else {
            throw new Exception('Message could not be sent.');
        }
    } catch (Exception $e) {
        error_log("Mailer Error: " . $mail->ErrorInfo);
        echo json_encode(['status' => 'error', 'message' => 'Message could not be sent. Please try again later. Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
