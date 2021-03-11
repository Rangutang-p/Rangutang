//Patrick C. Kendall 03/10/21
// This function makes an element appear after a certain scroll down the page
// Duplicate

window.addEventListener("scroll",storeScroll2);

// get right box
var box4 = document.getElementById("box4");

// get offset of box
var appear2 = box4.offsetTop + 50;

// function which adds a class and deletes a class from box1
function storeScroll2() {
  // document.getElementById("myHeader").style.backgroundColor = "orange";
  if (window.pageYOffset > appear2) {
    // document.getElementById("myHeader").style.backgroundColor = "orange";
    box4.classList.add("box-4")
    box4.classList.remove("initial-box-2")
  }
}
