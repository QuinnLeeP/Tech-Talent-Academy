let firstValue = Number(prompt("Enter a number"));
// converted the input to a number so the + operator doesn't concatenate values
let secondValue =Number(prompt("Enter a second number"));

let operation = prompt("How should these numbers interact");

// Function for the addition operator
function addition(firstValue, secondValue) {
    return firstValue + secondValue ;
}
// Funtion for the subtraction operator
function subtraction(firstValue, secondValue) {
    return firstValue - secondValue;
}
// Function for the division operator
function division(firstValue, secondValue) {
   return firstValue / secondValue;
}
// Function for the multiplication operator
function multiplication(firstValue, secondValue) {
    return firstValue * secondValue;
}
// Function for the power to operator
function powerTo(firstValue, secondValue) {
    return firstValue ^ secondValue;
}
// The final value from the function will be saved to this variable
let finalValue;

switch(operation) {
    case "+" :
        finalValue = addition(firstValue, secondValue);
        break;
    case "-":
        finalValue = subtraction(firstValue, secondValue);
        break;
    case "/":
        finalValue = division(firstValue, secondValue);
        break;
    case "*":
        finalValue = multiplication(firstValue, secondValue);
        break;
    case "^":
        finalValue = powerTo(firstValue, secondValue);
        break;
    default:
        console.log("No operation inputted");
        break;
}
// The values, operator and final value will be printed to the console.
console.log(`${firstValue} ${operation} ${secondValue} = ${finalValue}`)