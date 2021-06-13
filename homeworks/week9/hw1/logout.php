<?php
  require_once('conn.php');

  // delete token
  session_start();
  session_destroy();

  header("Location: index.php");
?>