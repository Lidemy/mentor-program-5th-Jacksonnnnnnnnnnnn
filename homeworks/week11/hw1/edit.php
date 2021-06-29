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
          <li><a href="#">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><strong>管理員 <?=$username?></strong></li>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="#">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to Game Game Blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <?php if (!$id) {?>
          <form action="add_article.php?username=<?php echo $username;?>" method="POST">
            <div class="edit-post__title">
              發表文章：
            </div>
            <div class="edit-post__input-wrapper">
              <input class="edit-post__input" name="article_title" placeholder="請輸入文章標題" />
            </div>
            <div class="edit-post__input-wrapper">
              <textarea rows="20" class="edit-post__content" name="article_content"></textarea>
            </div>
            <div class="edit-post__btn-wrapper">
              <input class="edit-post__btn" type="submit"/>
            </div>
          </form>
        <?php } else {?>
          <form action="update_article.php?id=<?=$row['id']?>" method="POST">
            <div class="edit-post__title">
              發表文章：
            </div>
            <div class="edit-post__input-wrapper">
              <input class="edit-post__input" name="article_title" value="<?php echo $row['title'];?>"/>
            </div>
            <div class="edit-post__input-wrapper">
              <textarea rows="20" class="edit-post__content" name="article_content"><?php echo $row['content'];?></textarea>
            </div>
            <div class="edit-post__btn-wrapper">
              <input class="edit-post__btn" type="submit"/>
            </div>
          </form>
        <?php }?>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>