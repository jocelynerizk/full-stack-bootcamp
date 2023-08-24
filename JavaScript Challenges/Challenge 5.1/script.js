let x= document.querySelector("body")
var button = document.createElement("button");
button.textContent = "Click Me";
x.appendChild(button);


button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

button.addEventListener("click", function() {
    button.style.backgroundColor = "red";
    button.style.color = "white"
  });

  button.addEventListener("click", function() {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    button.innerHTML = "Clicked " + randomNumber + "!";
  });



  var heading = document.createElement("h1");
  heading.textContent = "Hello, World!"; 
  x.appendChild(heading);

  heading.style.border = "10px dotted green";

 document.addEventListener("keydown", function(event) {
 var key = event.key.toLowerCase();

    if (key === 'a') {
     heading.style.backgroundColor = "red";
    } else if (key === 's') {
     heading.style.marginLeft = parseInt(heading.style.marginLeft || 0) + 10 + "px";
    } else if (key === 'd') {
      var paragraph = document.createElement("p");
      paragraph.textContent = "Key D was pressed!";
      x.appendChild(paragraph);
    } else if (key === 'w') {
        heading.style.display = heading.style.display === "none" ? "block" : "none";
    } else if (key === ' ') {
      var fontSize = parseInt(window.getComputedStyle(heading).fontSize);
      heading.style.fontSize = (fontSize + 4) + "px";
    }
  });
