<?php
  require_once("conn.php");

  function generateToken() {
    $n = '';
    for($i=0; $i<16; $i++) {
      $n .= chr(rand(65,90));
    }
    return $n;
  }

  function getUserFromUsername($username) {
    global $conn;
    $sql = sprintf(
      "select * from jackson_users where username = '%s'",
      $username
    );
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    return $row;
  }

?>