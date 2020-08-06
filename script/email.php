<?php
	/*
	=============================================
	Sendmail.php - send an email from a web form. Make sure this file is called sendmail.php
	when you upload it, otherwise the example form won't find the script and will error.

	NOTE: This script is heavily commented. Text after double slashes // is ignored by PHP
	=============================================
	*/

	// You only need to modify the following three lines of code to customise your form to mail script.
	$email_to = "swappin@swappin.io"; 			// Specify the email address you want to send the mail to.
	$subject = $_POST["subject"]; 	// Set the subject of your email.
	// Specify a page on your website to display a thankyou message when the mail is sent
	$thankyou_url = "http://www.swappin.io/";

	// Get the details the user entered into the form
	$name = $_POST["name"];
	$email_from = $_POST["email"];
	$birth = $_POST["birth"];
	$phone = $_POST["phone"];
	$city = $_POST["city"];
	$uf = $_POST["uf"];
	$message = $_POST["message"];

	// Validate the email address entered by the user
	// if(!filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
	// 	// Invalid email address
	// 	die("The email address entered is invalid.");
	// }

	// The code below creates the email headers, so the email appears to be from the email address filled out in the previous form.
	// The \r\n is the code to use a new line.
	$headers  = "From: " . $email_from . "\r\n";
	$headers .= "Reply-To: " . $email_from . "\r\n";	// (You can change the reply email address here if you want to.)

	// Now we can construct the email body which will contain the name and message entered by the user
	$message = "Nome: ". $name  .
	"\r\nData de Nascimento: " . $birth .
	"\r\nTelefone: " . $phone .
	"\r\nCidade: " . $city . ", UF: " . $uf .
	"\r\nAssunto: " . $subject .
	"\r\nMensagem: " . $message;

	// This is the important ini_set command which sets the sendmail_from address, without this the email won't send.
	ini_set("sendmail_from", $email_from);

	// Now we can send the mail we've constructed using the mail() function.
	// NOTE: You must use the "-f" parameter on Fasthosts' system, without this the email won't send.
	$sent = mail($email_to, $ubject, $message, $headers, "-f" . $email_from);

	// If the mail() function above successfully sent the mail, $sent will be true.
	if($sent) {
		header("Location: " . $thankyou_url); 	// Redirect customer to thankyou page
	} else {
		// The mail didn't send, display an error.
		echo "There has been an error sending your message. Please try later.";
	}

?>
