<?php
require_once '../config/db.php';

//api to fetch updates to be displayed on landing page

try {
    $stmt = $pdo->query("SELECT * FROM updates");
    $updates = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($updates); // Convert the array to JSON and output it

} catch (PDOException $e) {
    echo json_encode([
        'error' => 'Query failed',
        'message' => $e->getMessage()
    ]); // Return error message as JSON
}
?>