<?php

include('connect.php');

$user = [
  'name' => '',
  'email' => ''
  ];

if (isset($_GET['username'])) {
  $username = $_GET['username'];
  $query = "SELECT * FROM users WHERE username = '$username'";
  $result = mysqli_query($con, $query);
  if ($result) {
    $row = mysqli_fetch_array($result);
    $user['name'] = $row['name'];
    $user['email'] = $row['email'];
  }
}

echo json_encode($user);

?>