<?php
require "function.php"
// cek apakah button di klik atau tidak 
if(isset($_POST['submit'])){
    if(insert($_POST) > 0 ){
        echo "<script>
        alert('berhasil')
        document.location.href = '../index.html';
        </script>";
    }else{
        echo "<script>
        alert('gagal')
        document.location.href = '../index.html';
        </script>";
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- css -->
    <link rel="stylesheet" href="/css/register.css" />
    <!-- icon -->
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="shortcut icon" href="/img/favicon.jpg" type="image/x-icon">
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
    />
    <title>Login</title>
</head>
<body>
    <div class="container">
        <form action="" method="post" class="form">
            <label for="email">Email : </label>
            <input type="email" name="email" id="email" placeholder="email" autocomplete="none">
            <label for="username">Username : </label>
            <input type="text" name="username" id="username" placeholder="Username" autocomplete="none">
            <label for="password">Password : </label>
            <input type="password" name="password" id="password" placeholder="password" autocomplete="none">
        <button type="submit" name="submit" class="button">Login!!!</button>
        </form>
        <p class="text">sudah punya akun?Login <a href="#">Disini</a>.</p>
    </div>
</body>
</html>