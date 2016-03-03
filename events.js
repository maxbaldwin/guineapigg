// creating list of variables that will be referenced 
var output = document.getElementById("output-target");
var keypress = document.getElementById("keypress-input");
var colorbutton = document.getElementById("add-color");
var guineapig = document.getElementById("guinea-pig");
var large = document.getElementById("make-large");
var border = document.getElementById("add-border");
var round = document.getElementById("add-rounding");
var header = document.getElementById("page-header");
var title = document.getElementById("page-title");
var article = document.getElementsByClassName("article-section"); //always returns array

// console.log(output);

//Event Listener, 5 click, 1 mouse over, 1 mouse out

// article.addEventListener("click", Function()) {
//   output.innerHTML = "You clicked on the {text of the section} section";
// }

//mouseover is listening to title
title.addEventListener("mouseover", function() {
  output.innerHTML = "You moved your mouse over the header";
})

title.addEventListener("mouseleave", function() {
  output.innerHTML = "You left me!";
})