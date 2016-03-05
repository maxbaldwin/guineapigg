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
var buttons = document.getElementsByTagName("button")
// console.log(output);

//Event Listener, 5 click, 1 mouse over, 1 mouse out

// article.addEventListener("click", function() {
//   output.innerHTML = "You clicked on the {text of the section} section";
// })

//mouseover is listening to title
title.addEventListener("mouseover", function() {
  output.innerHTML = "You moved your mouse over the header";
})

//mouseleave is listening to title
title.addEventListener("mouseleave", function() {
  output.innerHTML = "You left me!";
})

colorbutton.addEventListener("click", function() {
  guineapig.classList.toggle("Blue");
  })

large.addEventListener("click", function() {
  guineapig.classList.toggle("Large");
})

border.addEventListener("click", function() {
  guineapig.classList.toggle("Border");
})

round.addEventListener("click", function() {
  guineapig.classList.toggle("Round");
})

//Doing number 9/10 here
for (var i = 0; i < article.length; i++) {
  // console.log(article);
  article[0].classList.add("Bold");
  article[article.length-1].classList.add("Italic");
}

//Doing number 11 here
for (var i = 0; i < buttons.length; i++){
  // console.log(buttons);
  buttons[i].classList.add("Block");
}

//Adding the mirroring here to answer number 4
keypress.addEventListener("keyup", function(Event) {
  // console.log(Event);
  output.innerHTML = keypress.value;
})


