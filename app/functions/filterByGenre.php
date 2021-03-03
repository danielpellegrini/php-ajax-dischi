  <?php

  $genreQuery = $_GET['genre'];

  function filterByGenre($songsArray, $type){
    $filtered = [];
    foreach ($songsArray as $album) {
      if($album['genre'] === $type  ){
        $filtered[] = $album;
      }

    }
    return $filtered;
  }


  if(!empty($genreQuery)){
    $albums = filterByGenre($albums, $genreQuery);
  }

    echo json_encode($albums);
    
    
?>