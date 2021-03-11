//Patrick C. Kendall 03/09/21
// This function makes an element appear after a certain scroll down the page

window.addEventListener("scroll",storeScroll);

// get right box
var box2 = document.getElementById("box2");

// get offset of box
var appear = box2.offsetTop + 50;

// function which adds a class and deletes a class from box1
function storeScroll() {
  // document.getElementById("myHeader").style.backgroundColor = "orange";
  if (window.pageYOffset > appear) {
    // document.getElementById("myHeader").style.backgroundColor = "orange";
    box2.classList.add("box-2")
    box2.classList.remove("initial-box-2")
  }
}
