// script for JS Calculator

//setup
const output = document.querySelector(".display-output");
//need these values to be global
let num1 = "";
let num2 = "";
let ans = "";
let operator = "";

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

//set up equals button
const eq = document.querySelector("#btn-eq");
eq.addEventListener("click", operate);

//get number
function getNum(e) {
    //if we have an operator and an answer, we're getting num2
    //and num1 is previous ans
    if (operator !== "" && ans !=="") {
        num1 = ans;
        num2 += e.target.innerText;
        output.textContent = num2;
    //if we have an operator and no answer, we're getting num2
    //and already have a num1
    } else if (operator !=="") {
        num2 += e.target.innerText;
        output.textContent = num2;
    //if we have no operator and no answer, we're getting num1
    } else {
        num1 += e.target.innerText;
        output.textContent = num1;
    }

    console.log(`num1: ${num1}`);
    console.log(`operator: ${operator}`);
    console.log(`num2: ${num2}`);
    console.log(`ans: ${ans}`);
}
//get operator
function getOper(e) {
    //if oper is pressed multiple times with no num2 just overwrite
    
    //if oper is pressed while we have num1 and num2, we are chaining 
    //operators so calculate

    //look for CLR
    if (e.target.innerText === "CLR") {
        clear();
    } else {
        //else set the operator var
        operator = e.target.innerText;
    }
}

//operate function
function operate() {
    console.log(`Num1: ${num1} Num2: ${num2} Operator: ${operator}`);
    
    //


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
    ans = (+num1 + +num2);
    output.textContent = `${result}`;
    //return result;
}

function subtract() {
    ans = (num1 - num2);
    output.textContent = `${result}`;

}

function multiply() {
    ans = (num1 * num2);
    output.textContent = `${result}`;

}

function divide() {
    //catch div 0
    if (num2 === 0) {
        return ans = "ERR: DIV 0";
    } else {
        ans = (num1 / num2);
        return ans;
    }

}




