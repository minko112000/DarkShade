<?php

include('connect.php');

if (isset($_GET['love_count']) && isset($_GET['id']) && isset($_GET['username']) && isset($_GET['edit'])) {
  $love_count = $_GET['love_count'];
  $vd_id = $_GET['id'];
  $username = $_GET['username'];
  $edit = $_GET['edit'];
  $query = "UPDATE videos SET love = $love_count WHERE id = $vd_id";
  $result = mysqli_query($con, $query);
  if ($result) {
    $query1 = '';
    if ($edit == 'increase') {
      $query1 = "INSERT INTO loves (username, vd_id) VALUES ('$username', $vd_id)";
    } else {
      $query1 = "DELETE FROM loves WHERE username = '$username' AND vd_id = $vd_id";
    }
    $result1 = mysqli_query($con, $query1);
    if ($result1) {
      echo('success');
    }
  }
}

?>

