// script for JS Calculator

//testing script

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const numsPrint = document.getElementById("nums");
const output = document.getElementById("result");
let num1;
let num2;

num1Input.addEventListener("change", () => {
    num1 = num1Input.value;
    numsPrint.textContent = `First:${num1} Second:${num2}`;

})

num2Input.addEventListener("change", () => {
    num2 = num2Input.value;
    numsPrint.textContent = `First:${num1} Second:${num2}`;

})

//math functions

function add() {
    let result = (+num1 + +num2);
    output.textContent = `${result}`;
    //return result;
}

function subtract() {
    let result = (num1 - num2);
    output.textContent = `${result}`;
    return result;
}

function multiply() {
    let result = (num1 * num2);
    output.textContent = `${result}`;
    return result;
}

function divide() {
    let result = (num1 / num2);
    output.textContent = `${result}`;
    return result;
}

//operate function

function operate(operator, num1, num2) {
    
}
