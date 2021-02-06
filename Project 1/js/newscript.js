/* Event listeners -----------------------------------------------------------*/

// onload event listeners
document.addEventListener("onload", displayPopUp());

/* function enabling cookies notification */
function displayPopUp() {
  var popup = document.getElementsByClassName('popup');
  popup[0].style.display = "block";
}

// function enabling cookies "OK"
function closeCookie() {
  var popup = document.getElementsByClassName('popup');
  popup[0].style.display = "none";
}

/* function enabling collapsing menu ----------------------------------------*/
  function expandmenu() {
    var x = document.getElementById("myTopnav")
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
    var c = document.getElementById("menuicon")

    if (c.className === "fa fa-bars") {
      c.className = " fa fa-times";
    } else {
      c.className = "fa fa-bars";
    }
  }
