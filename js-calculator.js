// script for JS Calculator

//setup
const output = document.querySelector(".display-output");
const live = document.querySelector(".live-display");
const dotBtn = document.getElementById("btn-dot");
//need these values to be global
let num1 = "";
let num2 = "";
let ans = 0;
let operator = "";

//wait for on button to be pressed
const on = document.getElementById("btn-on");
on.addEventListener("click", () => {
    //add keyup listener to body
    const body = document.querySelector("body");
    body.addEventListener("keyup", keyFilter);
    //add listeners for number buttons
    const numBtns = document.querySelectorAll(".number-btn");
    numBtns.forEach(btn => {
        btn.addEventListener("click", buttonFilter);
    });
    //add listener for . button
    dotBtn.addEventListener("click", buttonFilter);

    //add listeners for operations buttons
    const operBtns = document.querySelectorAll(".oper-btn");
    operBtns.forEach(btn => {
        btn.addEventListener("click", buttonFilter);
    });
    //add listener for equals button
    const eq = document.querySelector("#btn-eq");
    eq.addEventListener("click", checkEquals);

    //update display class to .active
    const display = document.querySelector(".display");
    display.classList.add("active");
    //display initial ans value (0)
    output.textContent = ans;
    live.textContent = "";
}, {once: true});

//filter button inputs
function buttonFilter(e) {
    let input = e.target.innerText;
    const numRegex = /[.\d]/;
    
    //if its not a digit or a . its an operator
    if (input.match(numRegex)) {
        getNum(input);
    } else {
        getOper(input);
    }
}

//filter keyboard inputs
function keyFilter(e) {
    //allowed keys regex
    const nums = /[.\d]/;
    const opers = /[+-]/;
    const multOpers = /[*xX]/;
    const divOpers = /[/%]/;
    const enter = /[=\bEnter\b]/;

    let input = e.key;

    if (input.match(nums)) {
        getNum(input);
    } else if (input.match(opers)) {
        getOper(input);
    } else if (input.match(multOpers)) {
        input = "X";
        getOper(input);
    } else if (input.match(divOpers)) {
        input = "%";
        getOper(input);
    } else if (input.match(enter)) {
        checkEquals();
    }
}

//get number
function getNum(input) {

    //stop overflow
    if (num1.toString().length > 10 || num2.toString().length > 10) {
        output.textContent = "ERR OVRFLW";
    //if we have an operator and an answer, we're getting num2
    //and num1 is previous ans
    } else if (operator !== "" && ans !==0) {
        num1 = ans;
        ans = 0;
        //extra decimal rejection:
        if (input === ".") {
            dotBtn.removeEventListener("click", buttonFilter);
        }
        num2 += input;
        output.textContent = num2;
        live.textContent = `${num1} ${operator} ${num2}`;
    //if we have an answer and no operator, we're getting num1 for a new calc
    } else if (operator === "" && ans !==0) {
        //extra decimal rejection:
        if (input === ".") {
            dotBtn.removeEventListener("click", buttonFilter);
        }
        ans = 0;
        num1 += input;
        output.textContent = num1;
        live.textContent = num1;
    //if we have an operator and no answer, we're getting num2
    //and already have a num1
    } else if (operator !=="") {
        if (input === ".") {
            dotBtn.removeEventListener("click", buttonFilter);
        }
        num2 += input;
        output.textContent = num2;
        live.textContent = `${num1} ${operator} ${num2}`;
    //if we have no operator and no answer, we're getting num1
    } else {
        if (input === ".") {
            dotBtn.removeEventListener("click", buttonFilter);
        }
        num1 += input;
        output.textContent = num1;
        live.textContent = num1;
    }

}
//get operator
function getOper(input) {
    //look for CLR first
    if (input === "CLR") {
        clear();
    //if oper is pressed while we have num1 and num2 we are chaining so calculate
    } else if (num1 !== "" && num2 !== "") {
        operator = input;
        operate();
    } else {
        //else set the operator var and move on
        operator = input;
        live.textContent = `${num1} ${operator}`;
    }
    //add decimal event listener back in since we're moving to next number input
    dotBtn.addEventListener("click", buttonFilter);
}

//what to do when equal button pressed
function checkEquals() {
    if (num1 !== "" && num2 === "") {
        ans = num1;
        num1 = "";
        operator = "";
    } else if (num1 === "" && ans !== 0) {
        ans = ans;
        operator = "";
    } else {
        operate();
    }
}

//operate function
function operate() {
    switch(operator) {
        case "%":
            divide();
            break;
        case "X":
            multiply();
            break;
        case "-":
            subtract();
            break;
        case "+":
            add();
            break;
    }
    
    //round to two decimals
    ans = Math.round(ans * 100) / 100;

    //stop at 11 places
    if (ans.toString().length > 11) {
        output.textContent = "ERR OVRFLW"
        live.textContent = ""
    } else if (ans === "ERR: DIV 0") {
        output.textContent = ans;
        live.textContent = `${num1} ${operator} ${num2}`;
    } else {
        output.textContent = ans;
        live.textContent = `${num1} ${operator} ${num2} = ${ans}`;
    }

    //reset inputs
    num1 = "";
    num2 = "";
    operator = "";

}

//clear function
function clear() {
    num1 = "";
    num2 = "";
    ans = 0;
    operator = "";
    output.textContent = 0;
    live.textContent = "";
}

//math functions

function add() {
    ans = (+num1 + +num2);
}

function subtract() {
    ans = (num1 - num2);
}

function multiply() {
    ans = (num1 * num2);
}

function divide() {
    //catch div 0
    if (num2 == 0) {
        ans = "ERR: DIV 0";
    } else {
        ans = (num1 / num2);
    }
}




