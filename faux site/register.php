<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "projet";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];

$sql = "INSERT INTO users (email, password, first_name, last_name) VALUES ('$email', '$password', '$first_name', '$last_name')";


if ($conn->query($sql) === TRUE) {
    echo "Vous avez bien été inscrit, merci à vous en espérant vous satisfaire. <a href='projet.html'>Retour à la page d'accueil</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
