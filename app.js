/*
let panel = document.getElementById('panel');
let square = document.querySelectorAll('.square');
*/

//creates random RGB codes
function generateRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let result = "RGB(" + r + "," + g + "," + b + ")";
  return result;
}

//creates array of randomly selected colors
let color = [
  generateRandomColor(),
  generateRandomColor(),
  generateRandomColor(),
  generateRandomColor(),
  generateRandomColor(),
  generateRandomColor()
];

//chooses one color from the color array
function chooseRandomColor() {
  let answerIndex = Math.floor(Math.random() * color.length);
  return answerIndex;
}

//shows the correct answer from the array
let answerIndex = chooseRandomColor();

function showChosenRGB() {
  document.getElementById("question").innerHTML = color[answerIndex];
}

showChosenRGB();

//displays randomly generated colors in the .square boxes
function showRandomColor() {
  document.querySelector(".s1").style.backgroundColor = color[0];
  document.querySelector(".s2").style.backgroundColor = color[1];
  document.querySelector(".s3").style.backgroundColor = color[2];
  document.querySelector(".s4").style.backgroundColor = color[3];
  document.querySelector(".s5").style.backgroundColor = color[4];
  document.querySelector(".s6").style.backgroundColor = color[5];
}

showRandomColor();

//
