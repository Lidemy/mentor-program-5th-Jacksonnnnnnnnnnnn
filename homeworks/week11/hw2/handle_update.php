<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (empty($_POST['content']) ) {
    header('Location: update_comment.php?errCode=1&id=' . $_POST['id']);
    die('資料不齊全');
  }

  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
  $type = $user['type'];
  $id = $_POST['id'];
  $content = $_POST['content'];

  if ($type != 'admin' and $type != 'editor') {
    $sql = "UPDATE jackson_comments SET content=? 
    WHERE id=? AND username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sis', $content, $id, $username);
    $result = $stmt->execute();
  } else {
    $sql = "UPDATE jackson_comments SET content=? 
    WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $content, $id);
    $result = $stmt->execute();
  }
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");

?>