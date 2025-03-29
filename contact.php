<?php
// Überprüfen, ob das Formular abgesendet wurde
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Formular-Daten sammeln und bereinigen
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Überprüfen, ob alle Felder ausgefüllt sind
    if (empty($name) || empty($email) || empty($message)) {
        echo "Bitte füllen Sie alle Felder aus."; // Fehlernachricht
        exit; // Script beenden
    }

    // E-Mail-Einstellungen
    $to = "deine-email@example.com";  // Die E-Mail-Adresse, an die das Formular gesendet wird
    $subject = "Neue Nachricht von $name";
    $body = "Name: $name\nEmail: $email\nNachricht:\n$message";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    // Sende die E-Mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Danke für deine Nachricht! Wir werden uns so schnell wie möglich bei dir melden.";
    } else {
        echo "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später noch einmal.";
    }
}
?>
