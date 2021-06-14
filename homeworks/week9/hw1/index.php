<?php
  session_start();
  require_once("conn.php");
  // require_once("utils.php");

  $username = NULL;
  if(!empty($_SESSION['token'])) {
    $username = $_SESSION['token'];
  }

  $result = $conn->query("select * from jackson_comments order by id desc");
  if(!$result) {
    die('Error:' . $conn->error);
  }
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
      
      <div>
        <?php if(!$username) {?>
          <a class="board__btn" href="register.php">註冊</a>
          <a class="board__btn" href="login.php">登入</a>
        <?php } else { ?>
          <a class="board__btn" href="logout.php">登出</a>
          <h3> Hello ! <?=$username?></h3>
        <?php }?>
      </div>
      <h1 class="board__title">留言板小實作</h1>
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
      <form class="board__new-comment-form" method="POST" action="handle_add.php">
      <?php if ($username) {?>  
        <textarea name="content" rows="5"></textarea>
        <input class="board__submit-btn" type="submit" />
      </form>
      <?php } else { ?>
        <div class="board__nickname">
          <span>Nickname：</span>
          <input disabled="disabled" type="text" name="nickname" />
        </div>
        <textarea  disabled="disabled" name="content" rows="5"></textarea>
        <h3>登入後才能留言唷</h3>
      <?php }?>
      <div class="board__hr"></div>
      <section>
        <?php
            while($row = $result->fetch_assoc()) {
        ?>
          <div class="card">
            <div class="card__avatar">
            </div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author"><?=$row['nickname']; ?></span>
                  <span class="card__time"><?=$row['created_at']; ?></span>
                </div>
                <p class="card__content"><?=$row['content']; ?>
                </p>
            </div>
          </div>
        <?php } ?>
      </section>
  </main>
</body>
</html>