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