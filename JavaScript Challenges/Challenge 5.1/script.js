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
  

  var form = document.createElement("form");
  x.appendChild(form);
  var fullNameLabel = document.createElement("label");
  fullNameLabel.textContent = "Full Name:";
  var fullNameInput = document.createElement("input");
  fullNameInput.type = "text";
  fullNameInput.name = "full-name";
  
  
  var emailLabel = document.createElement("label");
  emailLabel.textContent = "Email Address:";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  
  
  var passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  
  
  var confirmPasswordLabel = document.createElement("label");
  confirmPasswordLabel.textContent = "Confirm Password:";
  var confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.type = "password";
  confirmPasswordInput.name = "confirm-password";
  
  
  var submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  
  
  form.appendChild(fullNameLabel);
  form.appendChild(fullNameInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
  form.appendChild(confirmPasswordLabel);
  form.appendChild(confirmPasswordInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);

  submitButton.addEventListener("click", function() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
      errorMessage.style.display = "none";
      // Perform form submission or further actions here
    } else {
      errorMessage.style.display = "block";
    }
  });
  

     function displaySuccess() {
        var successMessage = document.createElement("p");
        successMessage.className = "success";
        successMessage.textContent = "Form submitted successfully!";
        form.appendChild(successMessage);
      }

    