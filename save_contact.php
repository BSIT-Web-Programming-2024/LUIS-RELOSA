<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$email = $_POST['email'];
$contact = $_POST['contact'];

// Insert data into the database
$sql = "INSERT INTO contacts (email, contact) VALUES ('$email', '$contact')";

if ($conn->query($sql) === TRUE) {
    echo "Contact information saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
