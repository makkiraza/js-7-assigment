// Declare a variable called age and assign your age to it
var age = 25; // Replace 25 with your actual age

// Show your age in an alert box
alert("Your age is: " + age );


var birthYear = 1990;
alert("My birth year is: " + birthYear);
        var visitorName = prompt("Please enter your name:");
        var productTitle = prompt("Enter the product title:");
        var quantity = parseInt(prompt("Enter the quantity of products you want to order:"));

        
        if (isNaN(quantity) || quantity <= 0) {
            alert("Invalid quantity. Please enter a valid number greater than zero.");
        } else {
            
            var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";
            document.write(message);
        }
