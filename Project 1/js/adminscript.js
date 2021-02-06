
// functions and JS to make modifying the website easier

// function to be linked to a button allowing new vlog post
function newVlogPost(vlogHeader, vlogText) {
//creating a new div and attaching a class
  var newDiv = document.createElement('div');
  newDiv.className = video;

// creating new video tag
  var newVideo = document.createElement('video');
  newVideo.setAttribute('src', ) ; //     <-------------------------- needs to be figured out: how to input video file pointer in a user friendly way


// create vlog post header and adding header text from form
  var newH1 = document.createElement('h1')
  addText(vlogHeader, newH1);

// create p element and adding text from form
  var newP = document.createElement('p');
  addText(vlogText, newP);

//Appending header and text into newDiv
  newDiv.appendChild(newH1);
  newDiv.appendChild(newP);
}



// function which recieves a string and appends the string as a child node into a pointed-to element
function addText(text, element) {
  var newText = document.createTextNode(text);
  element.appendChild(newText);
}
