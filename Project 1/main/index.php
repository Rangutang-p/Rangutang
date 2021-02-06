<?php include('../inc/top.php'); ?>

    <title>Rangutang - Drone Racing</title>

  <!-- page-specific stylesheet; for general stylesheets see ../inc/style-links.php -->
    <link rel="stylesheet" href="../css/index.css">

</head>
<body>
<?php include '../inc/popup.php' ?>
<?php include '../inc/header.php' ?>

    <!-- top container -->
      <div class="showcase" id='mydiv'>
        <!-- slideshow slide 1 -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="../img/pond.bmp" style="width:100%" alt="forest">
          <div class="captext">
            <h1> Explore by air </h1>
          </div>
        </div>

        <!-- slideshow slide 2 -->
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="../img/street.png" style="width:100%" alt="forest">
          <div class="captext">
            <h1> Explore by air </h1>
          </div>
        </div>

        <!-- slideshow slide 3 -->
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="../img/baseball.png" style="width:100%" alt="forest">
          <div class="captext">
            <h1> Explore by air </h1>
          </div>
        </div>

        <!-- next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <!-- The dots/circles -->
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
<hr>
      <section class="top-container">
        <div class="box box-1">
          <p>Intro course <br />- $45</p>
          <a class="btn" href="services.php">Read More</a>
        </div>
        <div class="box box-2">
          <p>Full course <br />- $300</p>
          <a class="btn" href="services.php">Read More</a>
        </div>

        <div class="sidebar">
          <div class="content-a">
            <h3>Recycling</h3>
          </div>
        </div>
    </section>

<hr>
    <!-- Intro video -->
    <section class="int-video">
      <video src="../vid/intro.AVI" poster="../img/random.jpg" controls>
      </video>
      <h1>Free Roam</h1>
      <p>A glimpse into whats possible with drones</p>
    </section>

<hr>
    <!-- testimonials area -->
    <section class="testimonial">
        <h1>TESTIMONIALS</h1>
      <div class="test test-1">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
        </p>
        <h2> Review Name </h2>
        <!-- star review rating -->
        <img src="../img/5stars.png" alt="five stars">
      </div>
      <div class="test test-2">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
        </p>
        <h2> Review Name </h2>
        <!-- star review rating -->
        <img src="../img/5stars.png" alt="five stars">
      </div>
    </section>
<hr>

<?php include '../inc/footer.php' ?>
