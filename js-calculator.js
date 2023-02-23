// script for JS Calculator

//setup
const output = document.querySelector(".display-output");
let num1 = "";
let num2 = "";
let ans = 0;
let operator;

//wait for on button to be pressed
const on = document.getElementById("btn-on");
on.addEventListener("click", () => {
    //get listeners for number buttons
    const numBtns = document.querySelectorAll(".number-btn");
    numBtns.forEach(btn => {
        btn.addEventListener("click", getNum);
    });
    //get listeners for operations buttons
    const operBtns = document.querySelectorAll(".oper-btn");
    operBtns.forEach(btn => {
        btn.addEventListener("click", getOper);
    });
    //update display class to .active
    const display = document.querySelector(".display");
    display.classList.add("active");
    //display 0
    output.textContent = 0;
}, {once: true});



//get number
function getNum(e) {
    //if operator is blank we're still on num1
    if (operator === "")
    num1 += e.target.innerText;
    output.textContent = num1;
}
//get operator
function getOper(e) {
    //if operator is hit while num1 is blank, we're using ans as num1 (initially 0)
    
    switch(e.target.innerText) {
        case "CLR":
            clear();
            break;

    }
}

//operate function

function operate(operator, num1, num2) {

}

//clear function
function clear() {
    num1 = "";
    num2 = "";
    ans = 0;
    operator = "";
    output.textContent = 0;
}

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




