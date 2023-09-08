<?php
// koneksi ke databse
$db = mysqli_connect('localhost','root','','tokokopi')

function insert($tambah){
    global $db;

    $email = $tambah['email'];
    $username = $tambah['username'];
    $password = $tambah['password'];

    $query = "INSERT INTO users VALUES (
        '',
        '$email',
        '$username',
        '$password')";

    mysqli_query($db,$query);

    return mysqli_affected_rows($db);
}
?>