<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if user exists
    $sql = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) == 1){
        $user = mysqli_fetch_assoc($result);

        // Verify password
        if(password_verify($password, $user['password'])){
            // Login successful
            header("Location: index.html");
            exit();
        } 
        else {
            // Wrong password
            header("Location: Login.html?error=wrongpass");
            exit();
        }

    } else {
        // No account found
        header("Location: Login.html?error=noaccount");
        exit();
    }
}
?>
