<?php

include('connect.php');

$text = '';
$customer_vd = '';
$username = '';
$query = '';
if (isset($_GET['text'])) {
  $text = $_GET['text'];
  $query = "SELECT * FROM videos WHERE des LIKE '%$text%' ORDER BY love DESC";
}

if (isset($_GET['text']) && isset($_GET['username'])) {
  $text = $_GET['text'];
  $username = $_GET['username'];
  $query = "SELECT * FROM videos WHERE des LIKE '%$text%' ORDER BY love DESC";
}

if (isset($_GET['text']) && isset($_GET['username']) && isset($_GET['customer_vd'])) {
  $text = $_GET['text'];
  $username = $_GET['username'];  
  $customer_vd = $_GET['customer_vd'];
  if ($customer_vd == 'Loves') {
    $query = "SELECT * FROM videos
              LEFT JOIN loves
              ON videos.id = loves.vd_id
              WHERE username = '$username' AND des LIKE '%$text%' ORDER BY love DESC";
  }
  if ($customer_vd == 'History') {
    $query = "SELECT * FROM videos
              LEFT JOIN history
              ON videos.id = history.vd_id
              WHERE username = '$username' AND des LIKE '%$text%' ORDER BY love DESC";
  }
  if ($customer_vd == 'Watch later') {
    $query = "SELECT * FROM videos
              LEFT JOIN watch_later
              ON videos.id = watch_later.vd_id
              WHERE username = '$username' AND des LIKE '%$text%' ORDER BY love DESC";
  }
}
  
$result = mysqli_query($con, $query);
if ($result) {
  foreach ($result as $row) {
    ?>
    
    <div class="box">
    <img src="<?php echo $row['thumbnail']; ?>" class="thumbnail">
    <div class="details-vd">
      <b class="dur"><?php echo $row['dur']; ?></b>
      <div>
        <i class="fa-solid fa-heart"></i>
        <b id="love-count-id-<?php
        if (!isset($_GET['customer_vd'])) {
          echo $row['id'];
        } else {
          echo $row['vd_id']; 
        }
        ?>" class="like-counts"><?php echo $row['love']; ?></b>
      </div>
    </div>
    <span class="des">
      <?php echo $row['des']; ?>
    </span>
    <div <i id="<?php
      if (!isset($_GET['customer_vd'])) {
        echo $row['id'];
      } else {
        echo $row['vd_id']; 
      }
      ?>" class="btn-gp">
      <button id="<?php echo $row['vd']; ?>" type="button" class="play">Play</button>
      <i class="fa-solid fa-share share"></i>
      <i  class="
      <?php
      
      if (!empty($username)) {
        $vd_id = '';
        if (!empty($customer_vd)) {
          $vd_id = $row['vd_id'];
        } else {
          $vd_id = $row['id']; 
        }
        $queryw = "SELECT * FROM watch_later WHERE username = '$username' AND vd_id = $vd_id";
        $resultw = mysqli_query($con, $queryw);
        if (mysqli_num_rows($resultw) != 0) {
          echo('fa-solid');
        } else {
          echo('fa-regular');
        }
      } else {
        echo('fa-regular');
      }
      
      ?>
      fa-bookmark watch-later"></i>
      <i  class="
      <?php
      
      if (!empty($username)) {
        $vd_id = '';
        if (!empty($customer_vd)) {
          $vd_id = $row['vd_id'];
        } else {
          $vd_id = $row['id']; 
        }
        $queryl = "SELECT * FROM loves WHERE username = '$username' AND vd_id = $vd_id";
        $resultl = mysqli_query($con, $queryl);
        if (mysqli_num_rows($resultl) != 0) {
          echo('fa-solid');
        } else {
          echo('fa-regular');
        }
      } else {
        echo('fa-regular');
      }
      
      ?>
      fa-heart love"></i>
    </div>
  </div>
    
    <?php
  }
}

?>