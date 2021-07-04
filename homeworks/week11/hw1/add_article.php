<?php
  require_once('conn.php');

  if(empty($_GET['username'])) {
    header('Location: edit.php?errCode=1');
    die('請登入');
  }

  $name = $_GET['username'];
  $title = $_POST['article_title'];
  $content = $_POST['article_content'];

  $sql = "INSERT INTO jackson_blog_article(username, title, content)
    VALUES (?,?,?) ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $name, $title, $content);
  $result = $stmt->execute();
  if(!$result) {
    die($conn->error);
  }

  header("Location: admin.php");


?>