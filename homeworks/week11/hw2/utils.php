<?php
  require_once("conn.php");

  function getUserFromUsername($username) {
    global $conn;

    $stmt = $conn->prepare(
      'SELECT * FROM jackson_users WHERE username = ?'
    );
    $stmt->bind_param('s', $username);
    $result = $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    return $row;
  }
  
  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES);
  }

?>