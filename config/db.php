<?php

// Database configuration
$host = 'localhost';
$dbname = 'ceg_website';
$username = 'root'; 
$password = ''; 

// Create a new PDO instance to connect to the database
try {
    // Set the Data Source Name (DSN)
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";

    // Create a PDO instance with error mode set to exception
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    // If the connection fails, display the error message
    die("Database connection failed: " . $e->getMessage());
}

?>
