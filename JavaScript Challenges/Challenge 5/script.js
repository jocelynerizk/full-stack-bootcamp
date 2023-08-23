const m = document.querySelectorAll("menu");
console.log(m);
const h = document.querySelectorAll("header");
console.log(h);
const f = document.querySelectorAll("footer");
console.log(f);

var containerDiv = document.createElement("div");
containerDiv.className = "container"; 


var paragraphElement = document.createElement("p");
paragraphElement.textContent = "Hello, World!";


containerDiv.appendChild(paragraphElement);
document.body.appendChild(containerDiv);

containerDiv.style.backgroundColor = "blue";

paragraphElement.style.color = "white";

paragraphElement.style.fontSize = "24px";

paragraphElement.style.fontFamily = "Helvetica"
paragraphElement.style.border = "1px solid black";
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
for (var i = 0; i < headings.length; i++) {
    headings[i].style.fontStyle = "italic";
}

let x= document.querySelector("body")
var button = document.createElement("button");
button.textContent = "Hover Me";
button.className = "color-change-button";
x.appendChild(button);


button.style.padding = "10px 20px";
button.style.backgroundColor = "red";
button.style.color = "black";
button.style.border = "none";
button.style.cursor = "pointer";

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "orange"; 
});


button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "blue"; 
});

var originalDiv = document.getElementById("original"); 

originalDiv.addEventListener("click", function(event) {
    var targetButton = event.target;
        var loggText = targetButton.textContent;
        console.log("Clicked item", loggText);

});



var form = document.getElementById("myForm"); 


form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    console.log("Name:", name);
    console.log("Email:", email);
});
var originalDiv = document.getElementById("original"); 
var clonedDiv = originalDiv.cloneNode(true);
document.body.appendChild(clonedDiv);
var clonedp = clonedDiv.querySelector("p");
clonedp.textContent = "Cloned";

