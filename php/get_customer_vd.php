<?php

include('connect.php');

if (isset($_GET['username']) && isset($_GET['customer_vd'])) {
  $username = $_GET['username'];
  $customer_vd = $_GET['customer_vd'];
  $query = '';
  if ($customer_vd == 'Loves') {
    $query = "SELECT * FROM videos
              LEFT JOIN loves
              ON videos.id = loves.vd_id
              WHERE username = '$username' ORDER BY loves.id DESC";
  }
  if ($customer_vd == 'History') {
    $query = "SELECT * FROM videos
              LEFT JOIN history
              ON videos.id = history.vd_id
              WHERE username = '$username' ORDER BY history.id DESC";
  }
  if ($customer_vd == 'Watch later') {
    $query = "SELECT * FROM videos
              LEFT JOIN watch_later
              ON videos.id = watch_later.vd_id
              WHERE username = '$username' ORDER BY watch_later.id DESC";
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
          <b id="love-count-id-<?php echo $row['vd_id']; ?>" class="love-counts"><?php echo $row['love']; ?></b>
        </div>
      </div>
      <span class="des">
        <?php echo $row['des']; ?>
      </span>
      <div id="<?php echo $row['vd_id']; ?>"  class="btn-gp">
        <button id="<?php echo $row['vd']; ?>" type="button" class="play">Play</button>
        <i class="fa-solid fa-share share"></i>
        <i  class="
        <?php
        
        if (!empty($username)) {
          $vd_id = $row['vd_id'];
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
          $vd_id = $row['vd_id'];
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
}

?>