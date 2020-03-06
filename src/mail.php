<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
    $retour = mail('pauline@olliveaud.fr', 'Envoi depuis la page Contact', $_POST['message'], 'From : pauline@olliveaud.fr');
    if ($retour) {
        echo '<p>Votre message a bien été envoyé.</p>';
    }
    ?>
</body>
</html>