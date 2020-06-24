<?php
    header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
header('Access-Control-Allow-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $name = $data->name;
    $email = $data->email;
    $message = $data->message;
  
    echo json_encode($request_body);
 
    if (isset($data)) {

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "info.vedantainstitute@gmail.com";

        // Set the email subject.
        $subject = "Vedanta Institute Visakhapatnam";
     
      	$headers = 'From: Vedanta  <$email>' . "\r\n" .
      	           "Reply-To: $email" . "\r\n" .
      	           "Bcc: venuchiru4444@gmail.com\r\n" .
      	           "MIME-Version: 1.0\r\n" .
      	           "Content-Type: text/html; charset=ISO-8859-1\r\n"; 
        
      //$email_content = "Name: $name\n Gmail: $email\n Message: $message";

$email_content = '<html><body>';
$email_content .= "<h2 style='color: #1B2596'>Visitors from Vedanta Institute Visakhapatnam</h2>";
$email_content .= '<table rules="all" border="1" style="border-color: #666;" cellpadding="20">';
$email_content .= "<tr style='background: #eee;'><td><h3 style='color: #1B2596'>Name:</h3> </td><td><h3>" . $name . "</h3></td></tr>";
$email_content .= "<tr style='background: #eee;'><td><h3 style='color: #1B2596'>Email:</h3> </td><td><h3>" . $email . "</h3></td></tr>";
$email_content .= "<tr style='background: #eee;'><td><h3 style='color: #1B2596'>Message:</h3> </td><td><h3>" . $message . "</h3></td></tr>";
$email_content .= "</table>";
$email_content .= "</body></html>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $headers)) {
            // Set a 200 (okay) response code.
           
            http_response_code(200);
            echo "Thank you for your feedback. We will get back to you soon!";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>