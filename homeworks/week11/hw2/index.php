<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  $user = NULL;
  $type = NULL;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
    $type = $user['type'];
  }

  $page = 1;
  if (!empty($_GET['page'])) {
    $page = $_GET['page'];
  }
  $limit = 5;
  $offset = ($page - 1) * $limit;

  $stmt = $conn->prepare(
    'SELECT U.nickname AS nickname, U.username AS username, U.type AS admin,
    C.created_at AS created_at, C.content AS content, C.id AS id
    FROM jackson_comments as C 
    LEFT JOIN jackson_users as U ON C.username = U.username
    WHERE C.is_deleted is NULL
    ORDER BY C.id DESC
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
          <?php if($type === 'admin') {?>
          <a class="board__btn" href="management.php">管理後台</a>
          <?php }?>
          <h3> Hello ! <?=$user['nickname']?><span class="update__nickname">編輯暱稱</span></h3>
          <form class="hide update_nickname-form" method="POST" action="update_user.php">
            新的暱稱：<input type="text" name="nickname" />
            <input type="submit"/>
          </form>
        <?php }?>
      </div>
      <h1 class="board__title">Bulletin Board</h1>
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
      <?php if ($username and $type != 'bad') {?>  
        <textarea name="content" rows="5"></textarea>
        <input class="board__submit-btn" type="submit" />
      </form>
      <?php } else { ?>
        <div class="board__nickname">
          <span>Nickname：</span>
          <input disabled="disabled" type="text" name="nickname" />
        </div>
        <textarea  disabled="disabled" name="content" rows="5"></textarea>
        <?php if(!$type) {?>
          <h3>登入後才能留言唷</h3>
        <?php } else {?>
          <h3>你是被停權的小壞蛋，不能再新增留言了ㄏㄏ</h3>
        <?php } ?>
      <?php }?>
      <div class="board__hr"></div>
      <section>
        <?php
            while($row = $result->fetch_assoc()) {
        ?>
          <!-- 普通用戶 -->
          <?php if($type != 'admin' and $type !='editor') {?>
            <div class="card">
              <div class="card__avatar">
              </div>
              <div class="card__body">
                  <div class="card__info">
                    <span class="card__author">
                      <?=escape($row['nickname']); ?>
                      (@<?=($row['username'])?>)
                    </span>
                    <span class="card__time">
                      <?=escape($row['created_at']); ?>
                    </span>
                    <?php if ($row['username'] === $username) {?>
                      <a href="update_comment.php?id=<?=$row['id'] ?>">編輯</a>
                      <a href="delete_comment.php?id=<?=$row['id'] ?>">刪除</a>
                    <?php }?>
                    </div>
                  <p class="card__content"><?=escape($row['content']); ?>
                  </p>
              </div>
            </div>
          <?php } else {?>
            <div class="card">
              <div class="card__avatar">
              </div>
              <div class="card__body">
                  <div class="card__info">
                    <span class="card__author">
                      <?=escape($row['nickname']); ?>
                      (@<?=($row['username'])?>)
                    </span>
                    <span class="card__time">
                      <?=escape($row['created_at']); ?>
                    </span>
                      <a href="update_comment.php?id=<?=$row['id'] ?>">編輯</a>
                      <?php if($type === 'admin') {?>
                        <a href="delete_comment.php?id=<?=$row['id'] ?>">刪除</a>
                      <?php } ?>
                    </div>
                  <p class="card__content"><?=escape($row['content']); ?>
                  </p>
              </div>
            </div>
          <?php }?>
        <?php } ?>
      </section>
      <div class="board__hr"></div>
      <?php
        $stmt = $conn->prepare(
          'SELECT count(id) AS count FROM jackson_comments WHERE is_deleted IS NULL'
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
          <a href="index.php?page=1">首頁</a>
          <a href="index.php?page=<?php echo $page - 1 ?>">上一頁</a>
          <?php } ?>
          <?php if ($page != $total_page) {?>
          <a href="index.php?page=<?php echo $page + 1 ?>">下一頁</a>
          <a href="index.php?page=<?php echo $total_page?>">末頁</a>
          <?php }?>

        </div>
        <div>總共有 <?=$count?> 筆資料</div>
      </div>

  </main>
  <script>
    let btn = document.querySelector('.update__nickname')
    if (btn) {
      btn.addEventListener('click', () => {
        let form = document.querySelector('.update_nickname-form')
        form.classList.toggle('hide')
      })
    }
  </script>
</body>
</html>