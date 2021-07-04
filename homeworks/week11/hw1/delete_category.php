<?php
  require_once('conn.php');

  if (empty($_GET['id']) ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }

  $id = $_GET['id'];

  $sql = "UPDATE jackson_blog_categories SET is_deleted = 1 
  WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $id);
  $result = $stmt->execute();

  if (!$result) {
    die($conn->error);
  }


  header("Location: categories.php");

?>