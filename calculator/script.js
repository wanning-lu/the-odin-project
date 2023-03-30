
let operand1 = 0;
let operand2 = 0;

// activates after function key is pressed, then moves on inputting the second operand
let funcActivated = false;

// activates and allows for an expression to be completed
let opTwoActivated = false;

let possibleFunc = ["add", "subtract", "multiply", "divide"];
let pressedFunc = null;

let displayNumber = document.querySelector(".displaynumber");
let clear = document.querySelector(".clear");
let numbers = document.querySelectorAll(".number");
let functions = document.querySelectorAll(".function");
let equal = document.querySelector(".equal");
let empty = document.querySelectorAll(".empty");

// add event listeners to all non-empty buttons
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(e) {
        numberClicked(e.target);
    });
}
for (let i = 0; i < functions.length; i++) {
    functions[i].addEventListener("click", function(e) {
        functionClicked(e.target);
    });
}
equal.addEventListener("click", function(e) {
    equalClicked(e.target);
})
clear.addEventListener("click", () => {
    operand1 = 0;
    operand2 = 0;
    funcActivated = false;
    opTwoActivated = false;
    displayNumber.textContent = 0;
})



function equalClicked() {
    if (funcActivated && opTwoActivated) {
        console.log(pressedFunc);
        switch(pressedFunc) {
            case "add":
                operand1 = operand1 + operand2;
                break;
            case "subtract":
                operand1 = operand1 - operand2;
                break;
            case "multiply":
                operand1 = operand1 * operand2;
                break;
            case "divide":
                if (operand2 == 0) {
                    console.log("we're here...")
                    displayNumber.textContent = "don't even try...";
                    return;
                }
                operand1 = operand1 / operand2;
        }
        displayNumber.textContent = operand1;
        operand2 = 0;
        funcActivated = false;
        opTwoActivated = false;
    }
}

function functionClicked(func) {
    if (func.className.includes("add")) {
        pressedFunc = possibleFunc[0];
    } else if (func.className.includes("subtract")) {
        pressedFunc = possibleFunc[1];
    } else if (func.className.includes("multiply")) {
        pressedFunc = possibleFunc[2];
    } else {
        pressedFunc = possibleFunc[3];
    }
    funcActivated = true;
}

function numberClicked(number) {
    if (funcActivated) {
        operand2 = (operand2 * 10) + Number.parseInt(number.textContent);
        displayNumber.textContent = operand2;
        opTwoActivated = true;
    } else {
        operand1 = (operand1 * 10) + Number.parseInt(number.textContent);
        displayNumber.textContent = operand1;
    }
}