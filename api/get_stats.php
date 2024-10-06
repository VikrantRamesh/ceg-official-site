<?php
require_once '../config/db.php';

//api to fetch statistics to be displayed on landing page

try {
    $stmt = $pdo->query("SELECT * FROM statistics");
    $statistics = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($statistics); // Convert the array to JSON and output it

} catch (PDOException $e) {
    echo json_encode([
        'error' => 'Query failed',
        'message' => $e->getMessage()
    ]); // Return error message as JSON
}
?>