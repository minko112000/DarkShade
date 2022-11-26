<?php

include('connect.php');

$username = '';
$name = '';
$email = '';

if (!empty($_POST['name']) && !empty($_POST['email'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $query = "SELECT * FROM users WHERE email = '$email'";
  $result = mysqli_query($con, $query);
  if (mysqli_num_rows($result) == 1) {
    $user = mysqli_fetch_array($result);
    $username = $user['username'];
    echo $username;
  } else {
    $username = rand(100000000000000, 999999999999999);
    $query1 = "INSERT INTO users (username, name, email, created) VALUES ('$username', '$name', '$email', now())";
    $result1 = mysqli_query($con, $query1);
    if ($result1) {
      echo $username;
    }
  }
}


?>
