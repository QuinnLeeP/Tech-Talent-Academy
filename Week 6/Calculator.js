let firstValue = prompt("Enter a number");

let secondValue = prompt("Enter a second number");

let operation = prompt("How should these numbers interact");


function addition(firstValue, secondValue) {
    return firstValue + secondValue;
}

function subtraction(firstValue, secondValue) {
    return firstValue - secondValue;
}

function division(firstValue, secondValue) {
   return firstValue / secondValue;
}

function multiplication(firstValue, secondValue) {
    return firstValue * secondValue;
}

function powerTo(firstValue, secondValue) {
    return firstValue ^ secondValue;
}

switch(operation) {
    case "+" :
        addition();
        break;
    case "-":
        subtraction();
        break;
    case "/":
        division();
        break;
    case "*":
        multiplication();
        break;
    case "^":
        powerTo();
        break;
    default:
        console.log("No operation inputted");
        break;
}

console.log(`${firstValue} ${operation} ${secondValue} =`)