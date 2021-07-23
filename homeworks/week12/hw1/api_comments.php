<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');
  if (
    empty($_GET['site_key'])
  ) {
    $json = array(
      "ok" => false,
      "message" => "Please input site_key"
    );

    $response = json_encode($json);
    echo $response;
    die();
  }

  $id_before = NULL;
  if(!empty($_GET['beforeID'])) {
    $id_before = $_GET['beforeID'];
  }
  $site_key = $_GET['site_key'];
  

  $sql = "SELECT * FROM jackson_discussions
    WHERE site_key = ? " .  
    (empty($id_before) ? "" : "and id < ? ") .
    "ORDER BY id DESC LIMIT 5";
  $stmt = $conn->prepare($sql);
  if (empty($id_before)) {
    $stmt->bind_param('s', $site_key);
  } else {
    $stmt->bind_param('si', $site_key, $id_before);
  }
  
  $result = $stmt->execute();

  if(!$result) {
    $json = array(
      "ok" => false,
      "message" => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $result = $stmt->get_result();
  $discussions = array();
  while($row = $result->fetch_assoc()) {
    array_push($discussions, array(
      "id" => $row['id'],
      "nickname" => $row['nickname'],
      "content" => $row['content'],
      "created_at" => $row['created_at']
    ));
  }

  $json = array(
    "ok" => true,
    "discussions" => $discussions
  );

  $response = json_encode($json);
  echo $response;

?>