<?php

include('connect.php');

if (isset($_GET['id']) && isset($_GET['username']) && isset($_GET['edit'])) {
  $vd_id = $_GET['id'];
  $username = $_GET['username'];
  $edit = $_GET['edit'];
  $query1 = '';
  if ($edit == 'increase') {
    $query1 = "INSERT INTO watch_later (username, vd_id) VALUES ('$username', $vd_id)";
  } else {
    $query1 = "DELETE FROM watch_later WHERE username = '$username' AND vd_id = $vd_id";
  }
  $result1 = mysqli_query($con, $query1);
  if ($result1) {
    echo('success');
  }
}

?>
