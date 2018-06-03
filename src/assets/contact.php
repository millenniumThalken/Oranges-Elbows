<?php

if (isset($_POST['submit'])){
    $to = "orangesandelbows@gmail.com";
    $subject = "Contact Form";
    $name = $_POST['name'];
    $client_email = $_POST['email'];
    $message = $_POST['message'];
    $header = "From:" . $name;

    $message = "New Cleaning Request:

    Name: " . $name . "
    Email: " . $client_email . "
    Message: " . $message;

    mail($to,$subject,$message,$header);

    header('Location: contact-form.component.html');
    exit();
}
else
{
    echo "FAIL!!!";
}

?>