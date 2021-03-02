<?php

  require_once __DIR__ . '/database/database.php';

  // var_dump($albums);


?>

 <link rel="stylesheet" href="css/style.css">

 <div id="app">

   <header>
     <div class="container">
       <img src="img/logo.png" alt="logo" />
     </div>
   </header>

   <div class="cds-container container">

     <?php foreach ($albums as $album) {

      ?>

       <div class="cd">
         <?php $image = $album['poster'] ?>
         <img src='<?php echo $image ?>' alt="<?php echo $album['title'] ?>">
         <h3><?php echo $album['title'] ?></h3>
         <span class="author"><?php echo $album['author'] ?></span>
         <span class="year"><?php echo $album['year'] ?></span>
       </div>

       <?php

    } ?>

   </div>

 </div>
