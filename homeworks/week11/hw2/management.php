<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  $user = NULL;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  }

  $page = 1;
  if (!empty($_GET['page'])) {
    $page = $_GET['page'];
  }
  $limit = 5;
  $offset = ($page - 1) * $limit;

  $stmt = $conn->prepare(
    'SELECT id, nickname, username, type
    FROM jackson_users
    ORDER BY id DESC
    LIMIT ? OFFSET ?'
  );
  $stmt->bind_param('ii', $limit, $offset);
  $result = $stmt->execute();
  if(!$result) {
    die('Error:' . $conn->error);
  }
  $result = $stmt->get_result();
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
          <a class="board__btn" href="index.php">回到前台</a>
          <h3> Hello ! 管理員：<?=$user['nickname']?></h3>
        <?php }?>
      </div>
      <h1 class="board__title">後台管理</h1>
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

      <?php } else { ?>

      <?php }?>
      <div class="board__hr"></div>
      <section>
        <?php
            while($row = $result->fetch_assoc()) {
              $type = $row['type'];
              if($type == NULL) {
                $type = '庶民';
              } else if ($type == 'bad') {
                $type = '賤民';
              } else if ($type == 'admin') {
                $type = '管理員';
              } else {
                $type = '編輯';
              }
        ?>
          <div class="card">
            <div class="card__avatar">
            </div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author">
                    <?=escape($row['nickname']);?>
                    (@<?=($row['username'])?>)
                  </span>
                    <div class="setting__buttons">
                      <a class ="admin" href="handle_management.php?id=<?=$row['id']?>&type=1">設為管理員</a>
                      <a class="editor" href="handle_management.php?id=<?=$row['id']?>&type=4">設為編輯</a>
                      <a href="handle_management.php?id=<?=$row['id']?>&type=2">設為庶民</a>
                      <a class ="bad" href="handle_management.php?id=<?=$row['id']?>&type=3">設為賤民</a>
                    </div>
                </div>

                <p class="card__content">目前身份: <?=$type?></p>

            </div>
          </div>
        <?php } ?>
      </section>
      <div class="board__hr"></div>
      <?php
        $stmt = $conn->prepare(
          'SELECT count(id) AS count FROM jackson_users'
        );
        $result = $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $count = $row['count'];
        $total_page = ceil($count / $limit);
      ?>
      <div class="footer__page">
        <div><?php echo $page ?> / <?php echo $total_page ?></div>
        <div class="page__button">
          <?php if ($page != 1) {?>
          <a href="management.php?page=1">首頁</a>
          <a href="management.php?page=<?php echo $page - 1 ?>">上一頁</a>
          <?php } ?>
          <?php if ($page != $total_page) {?>
          <a href="management.php?page=<?php echo $page + 1 ?>">下一頁</a>
          <a href="management.php?page=<?php echo $total_page?>">末頁</a>
          <?php }?>

        </div>
        <div>總共有 <?=$count?> 筆資料</div>
      </div>

  </main>
</body>
</html>