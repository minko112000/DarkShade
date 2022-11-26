<?php

include('connect.php');

if (isset($_GET['username']) && isset($_GET['vd_id'])) {
  $username = $_GET['username'];
  $vd_id = $_GET['vd_id'];
  $query = "SELECT * FROM history WHERE username = '$username' AND vd_id = $vd_id";
  $result = mysqli_query($con, $query);
  if (mysqli_num_rows($result) == 0) {
    $query1 = "INSERT INTO history (username, vd_id) VALUES ('$username', $vd_id)";
    $result1 = mysqli_query($con, $query1);
    if ($result1) {
      echo('success');
    }
  } else {
    $query2 = "DELETE FROM history WHERE username = '$username' AND vd_id = $vd_id";
    $result2 = mysqli_query($con, $query2);
    if ($result2) {
      $query1 = "INSERT INTO history (username, vd_id) VALUES ('$username', $vd_id)";
      $result1 = mysqli_query($con, $query1);
      if ($result1) {
        echo('success');
      }
    }
  }
}

?>