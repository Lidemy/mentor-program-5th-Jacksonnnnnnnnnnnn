<?php  
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  $id = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }
  if (!empty($_GET['id'])) {
    $id = $_GET['id'];
  
    $stmt = $conn->prepare(
      'SELECT * FROM jackson_blog_article
      WHERE id=?'
    );
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    if(!$result) {
      die('ERROR: ' . $conn->error);
    }
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
  }
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
          <li><a href="admin.php">文章列表</a></li>
          <li><a href="categories.php">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="logout.php">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放遊戲技術之地</h1>
      <div>Welcome to Game Game Blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="posts">
      <article class="post">
        <div class="post__header">
          <div><?=escape($row['title']);?><br>by <?=escape($row['username']);?></div>
          <?php if($username) {?>
          <div class="post__actions">
            <a class="post__action" href="edit.php?id=<?=$row['id']?>">編輯</a>
          </div>
          <?php }?>
        </div>
        <div class="post__info"><?=escape($row['created_at']);?>
        </div>
        <div class="post__content-full"><?=escape($row['content']);?>
        </div>
      </article>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>
