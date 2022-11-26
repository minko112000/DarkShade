<?php

include('connect.php');

if (isset($_GET['category'])) {
  $category = $_GET['category'];
  $username = '';
  if (isset($_GET['username'])) {
    $username = $_GET['username'];
  } else {
    $username = '';
  }
  $query = '';
  if ($category == 'All') {
    $query = "SELECT * FROM videos ORDER BY love DESC";
  } else {
    $query = "SELECT * FROM videos WHERE cat = '$category' ORDER BY love DESC";
  }
  $result = mysqli_query($con, $query);
  foreach ($result as $row) {
    ?>
    
    <div class="box">
      <img src="<?php echo $row['thumbnail']; ?>" class="thumbnail">
      <div class="details-vd">
        <b class="dur"><?php echo $row['dur']; ?></b>
        <div>
          <i class="fa-solid fa-heart"></i>
          <b id="love-count-id-<?php echo $row['id']; ?>" class="love-counts"><?php echo $row['love']; ?></b>
        </div>
      </div>
      <span class="des">
        <?php echo $row['des']; ?>
      </span>
      <div id="<?php echo $row['id']; ?>"  class="btn-gp">
        <button id="<?php echo $row['vd']; ?>" type="button" class="play">Play</button>
        <i  class="fa-solid fa-share share"></i>
        <i  class="
        <?php
        
        if (!empty($username)) {
          $vd_id = $row['id'];
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
          $vd_id = $row['id'];
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