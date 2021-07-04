<?php
  session_start();
  require_once('conn.php');

  if(
    empty($_POST['username']) ||
    empty($_POST['password']) 
  ) {
    header('Location: login.php?errCode=1');
    die();
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM jackson_users WHERE username=?";

  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $username);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  if ($result === 0) {
    header("Location: login.php?errCode=2");
    exit();
  }

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if (password_verify($password, $row['password'])) {
    // build php session
    $_SESSION['username'] = $username;
    header("Location: index.php");
  } else {
    header("Location: login.php?errCode=2");
  }

?>