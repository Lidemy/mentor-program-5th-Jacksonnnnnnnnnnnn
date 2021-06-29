<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if(empty($_POST['content'])) {
    header('Location: index.php?errCode=1');
    die('請輸入內容');
  }

  $username = $_SESSION['username'];

  $content = $_POST['content'];

  $sql = "INSERT INTO jackson_comments(username, content)
      VALUES(?, ?)";
  $stmt = $conn->prepare($sql);
  // 兩個 s === 兩個 string 變數
  $stmt->bind_param('ss', $username, $content);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>