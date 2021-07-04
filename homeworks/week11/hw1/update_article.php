<?php
  require_once('conn.php');

  if(empty($_GET['id'])) {
    header('Location: categories.php?errCode=1');
    die('請填寫分類');
  }

  $id = $_GET['id'];
  $title = $_POST['article_title'];
  $content = $_POST['article_content'];

  $sql = "UPDATE jackson_blog_article SET title=?,content=?
    WHERE id=? ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ssi', $title,$content,$id);
  $result = $stmt->execute();
  if(!$result) {
    die($conn->error);
  }

  header("Location: admin.php");

?>

