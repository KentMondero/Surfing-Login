<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Check if email already exists
    $check = "SELECT * FROM users WHERE email = '$email'";
    $check_result = mysqli_query($conn, $check);

    if (mysqli_num_rows($check_result) > 0) {
        // Email already taken
        header("Location: Login.html?error=emailexists");
        exit();
    }

    // Insert new user
    $sql = "INSERT INTO users (username, email, password)
            VALUES ('$username', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        header("Location: Login.html?success=registered");
        exit();
    } else {
        header("Location: Login.html?error=registerfailed");
        exit();
    }
}
?>
