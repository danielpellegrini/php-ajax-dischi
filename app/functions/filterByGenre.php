  <?php


      if (array_key_exists('genre', $_GET) && !empty($_GET['genre'])) {

        $albums = array_filter($albums, function($disc) {
          return (strpos($disc['genre'], $_GET['genre']) !== false);
        });
        if (count($albums) === 0) {
          http_response_code(400);
        }
      }

    
    
    
?>