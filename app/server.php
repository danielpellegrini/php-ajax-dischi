<?php

  require_once __DIR__ . '/../database/database.php';
  include_once __DIR__ . '/functions/filterByGenre.php'; 

  header('Content-Type: application/json');
  
  echo json_encode($albums);
  
    
?>

