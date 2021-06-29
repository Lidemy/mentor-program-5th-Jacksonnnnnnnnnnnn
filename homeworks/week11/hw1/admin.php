<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }

  $stmt = $conn->prepare(
    'SELECT * FROM jackson_blog_article
    WHERE is_deleted is NULL 
    ORDER BY id DESC'
  );

  $result = $stmt->execute();
  if(!$result) {
    die('ERROR: ' . $conn->error);
  }
  $result = $stmt->get_result();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>GG Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="#">文章列表</a></li>
          <li><a href="categories.php">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <?php if(!$username) {?>
            <li><a href="login.php">登入</a></li>
          <?php } else {?>
            <li><strong>管理員 <?=$username?></strong></li>
            <li><a href="edit.php" id="admin-add__article">新增文章</a></li>
            <li><a href="logout.php">登出</a></li>
          <?php }?>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>文章列表</h1>
      <div>Game Game List</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="admin-posts">
        <?php while($row = $result->fetch_assoc()) {?>
          <div class="admin-post">
            <div class="admin-post__title">
              <?=escape($row['title']);?>
            </div>
            <div class="admin-post__info">
              <a class="admin-btn-read-more" href="blog.php?id=<?=$row['id']?>">READ MORE</a>
              <div class="admin-post__created-at">
                <?=escape($row['created_at']);?>
              </div>
              <?php if($username) {?>
                <a class="admin-post__btn" href="edit.php?id=<?=$row['id']?>">
                  編輯
                </a>
                <a class="admin-post__btn" href="delete_article.php?id=<?=$row['id']?>">
                  刪除
                </a>
              <?php }?>
            </div>
          </div>
        <?php }?>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>