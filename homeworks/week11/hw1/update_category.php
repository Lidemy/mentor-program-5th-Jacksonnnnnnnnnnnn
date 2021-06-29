<?php
  require_once('conn.php');

  if(empty($_GET['id'])) {
    header('Location: categories.php?errCode=1');
    die('請填寫分類');
  }

  $id = $_GET['id'];
  $new_name = $_POST['category_name'];
  $sql = "UPDATE jackson_blog_categories SET name=?
    WHERE id=? ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('si', $new_name,$id);
  $result = $stmt->execute();
  if(!$result) {
    die($conn->error);
  }

  header("Location: categories.php");

?>

