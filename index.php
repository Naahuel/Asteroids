<html>
<head>
  <title>A:BRA Asteroids</title>
  <meta charset="UTF-8">
  <script language="javascript" type="text/javascript" src="libraries/p5.js"></script>
  <script language="javascript" type="text/javascript" src="libraries/p5.dom.js"></script>
  <script language="javascript" type="text/javascript" src="libraries/p5.sound.js"></script>
  <script language="javascript" type="text/javascript" src="sketch.js"></script>
  <script language="javascript" type="text/javascript" src="input.js"></script>
  <script language="javascript" type="text/javascript" src="entity.js"></script>
  <script language="javascript" type="text/javascript" src="ship.js"></script>
  <script language="javascript" type="text/javascript" src="hud.js"></script>
  <script language="javascript" type="text/javascript" src="asteroid.js"></script>
  <script language="javascript" type="text/javascript" src="laser.js"></script>
  <script language="javascript" type="text/javascript" src="dust.js"></script>
  <style>
    body {
      padding: 0;
      margin: 0;
    }
    /*iframe{
      position: absolute;
      z-index: 0;
      visibility: none;
      opacity: 0;
    }*/
  </style>
</head>

<body>
  <?php
    $songs = array(
      '9NcPvmk4vfo',
      'G7HVrOkhuLw',
      'LIM6u-wNIWA',
      'Uu8WP-Se90w',
      'L0de0YVBPgs',
    );
  ?>
  <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/<?php echo $songs[rand(0, count($songs)-1)]; ?>?autoplay=1&amp;loop=1" frameborder="0" allowfullscreen></iframe> -->
</body>
</html>
