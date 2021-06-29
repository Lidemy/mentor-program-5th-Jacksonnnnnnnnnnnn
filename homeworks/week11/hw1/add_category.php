<?php
  require_once('conn.php');

  if(empty($_POST['category'])) {
    header('Location: categories.php?errCode=1');
    die('請填寫分類');
  }

  $new_category = $_POST['category'];
  $sql = "INSERT INTO jackson_blog_categories(name)
    VALUES (?) ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $new_category);
  $result = $stmt->execute();
  if(!$result) {
    die($conn->error);
  }

  header("Location: categories.php");


?>