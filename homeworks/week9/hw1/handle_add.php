<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if(empty($_POST['content'])) {
    header('Location: index.php?errCode=1');
    die('請輸入內容');
  }

  $user = getUserFromUsername($_SESSION['token']);
  $nickname = $user['nickname'];

  $content = $_POST['content'];

  $sql = sprintf(
    "insert into jackson_comments(nickname, content)
      values('%s', '%s')",
    $nickname, $content
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>