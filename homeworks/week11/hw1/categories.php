<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $sql = 'SELECT * FROM jackson_blog_categories
    WHERE is_deleted is NULL';
  $stmt = $conn->prepare($sql);
  $result = $stmt->execute();
  if(!$result) {
    die('Error:' . $conn->error);
  }
  $result = $stmt->get_result();
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">

  <title>Blog</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
  <link rel="stylesheet" href="./style.css">

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
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <?php if(!empty($_SESSION['username'])) {?>
            <li><a href="admin.php">管理後台</a></li>
          <?php } else {?>
            <li><a href="login.php">登入</a></li>
          <?php }?>
        </div>
      </ul>
    </div>
  </nav>
  <div class="category__content">
    <h1>分類管理</h1>
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
    <?php if(!empty($_SESSION['username'])) {?>
      <button class="add__category">新增分類</button>
      <form class="hide add__categoryform" method="POST" action="add_category.php">
        新的分類：<input type="text" name="category"/>
        <input type="submit"/> 
      </form>
    <?php } else {?>
        登入後才能做管理喔
    <?php }?>
    <!-- <a href="/admin_cataegory.php">管理分類</a> -->
    <div>
      <?php
          while($row = $result->fetch_assoc()) {
      ?>
        <ul>
          <li>
            <?=escape($row["name"]);?>
            <?php if(!empty($_SESSION['username'])) {?>
              <a class="edit__category">編輯</a>
              <form class="hide edit__categoryform" method="POST" action="update_category.php?id=<?php echo $row['id'];?>">
                更改類別：<input type="text" name="category_name" value="<?php echo $row['name'];?>"/>
                <input type="submit"/> 
              </form>
              <a class="delete__category" href="delete_category.php?id=<?php echo $row['id'];?>">刪除</a>
            <?php }?>
          </li>
        </ul>
      <?php } ?>
    </div>
  </div>
  <script>
    let btnAddCategory = document.querySelector('.add__category')
    let btnEditCategory = document.querySelectorAll('.edit__category')

    if (btnAddCategory) {
      btnAddCategory.addEventListener('click', () => {
        let form = document.querySelector('.add__categoryform')
        form.classList.toggle('hide')
      })
    }
    if (btnEditCategory) {
      for (let i = 0; i < btnEditCategory.length; i++) {
        btnEditCategory[i].addEventListener('click', () => {
          let form = document.querySelectorAll('.edit__categoryform')
          let del = document.querySelectorAll('.delete__category')
          del[i].classList.toggle('hide')
          form[i].classList.toggle('hide')
        })
      }
    }

  </script>
</body>
</html>
