<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./normalize.css" />
  <link rel="stylesheet" href="./style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>GG Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="admin.php">文章列表</a></li>
          <li><a href="categories.php">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <!-- <li><a href="admin.html">管理後台</a></li> -->
          <li><a href="login.php">登入</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>登入遊戲技術之地</h1>
      <div>Login to game game blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="posts">
      <form class="board__new-comment-form" method="POST" action="handle_login.php">
        <div class="board__login">
          <span>帳號：</span>
          <input type="text" name="username" />
        </div>
        <div class="board__login">
          <span>密碼：</span>
          <input type="password" name="password" />
        </div>
        <input class="board__submit-btn" type="submit" />
      </form>
      <div>
      <?php
        if (!empty($_GET['errCode'])) {
          $code = $_GET['errCode'];
          $msg = 'Error';
          if ($code == '1') {
            $msg = '資料不齊全';
          } else if ($code == '2') {
            $msg = '帳號或密碼輸入錯誤';
          }
          echo '<h2 class="error">錯誤：' . $msg . '</h2>';
        }
    ?>
    </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>
