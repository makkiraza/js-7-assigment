function addNumbers() {
    
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    var result = num1 + num2;

    
    document.getElementById("result").innerHTML = "The result of addition is: " + result;
}

// const num1 = 10;
// const num2 = 5;

// const resultSubtraction = num1 - num2;
// console.log("Subtraction:", resultSubtraction); // Output: 5

// const num1 = 10;
// const num2 = 5;

// const resultMultiplication = num1 * num2;
// console.log("Multiplication:", resultMultiplication); // Output: 50

// const num1 = 10;
// const num2 = 5;

// const resultDivision = num1 / num2;
// console.log("Division:", resultDivision); // Output: 2

// const num1 = 10;
// const num2 = 3;

// const resultModulus = num1 % num2;
// console.log("Modulus:", resultModulus); // Output: 1

var table = prompt('Enter Table Number')
 for(var i=1; i <= 10; i++){
  document.write(table + " x " + i + ' = ' + table*i + "<br>")}
