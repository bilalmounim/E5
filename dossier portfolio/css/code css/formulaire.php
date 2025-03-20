<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Adresse e-mail de destination
    $destinataire = "bilalmounim6@gmail.com";

    // Sujet du courrier électronique
    $sujet = "Nouveau message du formulaire du portfolio";

    // Corps du message
    $corps_message = "Nom : $nom\n";
    $corps_message .= "E-mail : $email\n";
    $corps_message .= "Message : $message\n";

    // En-têtes du courrier électronique
    $en_tetes = "From: $email\r\n";

    // Envoi du courrier électronique
    mail($destinataire, $sujet, $corps_message, $en_tetes);

    // Redirection vers une page de confirmation
    header("Location: confirmation.html");
} else {
    // Redirection en cas d'accès direct au script PHP sans soumission de formulaire
    header("Location: index.html");
}
?>
