<<<<<<< Updated upstream:Project 1/js/myscript.js
/* function enabling collapsing menu */
  function expandmenu() {
    var x = document.getElementById("myTopnav")
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
=======
var slideIndex = 1;
showSlides(slideIndex);

// next/prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
>>>>>>> Stashed changes:Project 1/js/slideshow.js
  }
