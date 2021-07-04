<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (empty($_GET['id']) ) {
    header('Location: management.php?errCode=1&id=' . $_GET['id']);
    die('資料不齊全');
  }

  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
  $identifier = $user['type'];

  $id = $_GET['id'];
  $type = $_GET['type'];
  $new_type = NULL;

  if($type == 1) {
    $new_type = 'admin';
  } else if ($type == 3) {
    $new_type = 'bad';
  } else if ($type == 4) {
    $new_type = 'editor';
  }

  if($identifier === 'admin') {
    # 不知道是多此一舉(因為理論上其他身份的人進不來)，
    # 還是這是建議的做法呢？
    $sql = "UPDATE jackson_users SET type=?
      WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $new_type, $id);
    $result = $stmt->execute();
    if (!$result) {
      die($conn->error);
    }

    header("Location: management.php");

  }

?>