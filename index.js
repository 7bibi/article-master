
let button = document.getElementsByTagName("button")[0];
let hidden = document.getElementsByClassName("hidden")[0]
let bottomContent = document.getElementsByClassName("bottom-content")[0]
let michelle = document.getElementById("michelle");
let shareSVG = document.getElementsByClassName("share-btn")[0];
let triangle = document.getElementsByClassName("triangle")[0];


function showContent () {
  if (hidden.style.display === "block") {
    hidden.style.display = "none";
    shareSVG.style.filter = "brightness(100%)"; // Reset brightness
    triangle.style.display = "none";
    button.style.backgroundColor = "hsl(210, 46%, 95%)";

  } else {
    hidden.style.display = "block";
    shareSVG.style.filter = "brightness(300%)"; 
    triangle.style.display = "block";
    button.style.backgroundColor = "hsl(214, 17%, 51%)";
  }
}

