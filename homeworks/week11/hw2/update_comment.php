<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $id = $_GET['id'];

  $username = NULL;
  $user = NULL;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  }

  $stmt = $conn->prepare(
    'SELECT * FROM jackson_comments WHERE id = ?'
  );
  $stmt->bind_param('i', $id);
  $result = $stmt->execute();
  if(!$result) {
    die('Error:' . $conn->error);
  }
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="warning">
    <strong>注意！註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">

      <h1 class="board__title">編輯留言</h1>
      <?php
        if(!empty($_GET['errCode'])) {
          $code = $_GET['errCode'];
          $msg = 'Error';
          if($code === '1') {
            $msg = '注意：資料不齊全';
          }
          echo '<h2 class="error">' . $msg . '</h2>';
        }

      ?>
      <form class="board__new-comment-form" method="POST" action="handle_update.php">
        <textarea name="content" rows="5"><?=$row['content']?></textarea>
        <input type="hidden" name="id" value="<?=$row['id']?>"/>
        <input class="board__submit-btn" type="submit" />
      </form>


  </main>
</body>
</html>