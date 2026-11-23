/*** 
 * High-Level Language
 * Single Threaded Language
 * Interpreted Language
 * asyncronus*/

// es6(ecma script)-major changes made to JS after this

// Hoisting : Memory assigned first , then execution;
// Temporal Dead Zone


let addElem = document.getElementById("add");
let subElem = document.getElementById("sub");
let mulElem = document.getElementById("mul");
let divElem = document.getElementById("div");
let inputOneElem = document.getElementById("inputOne");
let inputTwoElem = document.getElementById("inputTwo");
let calculateEle = document.getElementById("calculate");
let outputElem = document.getElementById("output");
// Show 0 when the page opens
outputElem.textContent = 0;
// ---------- Step 2: Variables to remember the choice ----------
let selectedOperator = ''; // "+", "-", "*" or "/"
let selectedElem = null; // the button that is blue right now
let ans;

addElem.addEventListener('click', function () {
    // If another button is blue, make it normal again
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }
    // Remember this button and make it blue
    selectedElem = addElem;
    selectedOperator = addElem.textContent;
    addElem.style.backgroundColor = "blue";
    addElem.style.color = "white";
});
subElem.addEventListener('click', function () {
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }
    selectedElem = subElem;
    selectedOperator = subElem.textContent;
    subElem.style.backgroundColor = "blue";
    subElem.style.color = "white";
});
mulElem.addEventListener('click', function () {
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }
    selectedElem = mulElem;
    selectedOperator = mulElem.textContent;
    mulElem.style.backgroundColor = "blue";
    mulElem.style.color = "white";
});
divElem.addEventListener('click', function () {
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }
    selectedElem = divElem;
    selectedOperator = divElem.textContent;
    divElem.style.backgroundColor = "blue";
    divElem.style.color = "white";
});

calculateEle.addEventListener('click', function () {
    // Read the boxes and turn text into numbers
    let valOne = Number(inputOneElem.value);
    let valTwo = Number(inputTwoElem.value);
    console.log(valOne, valTwo);
    // Do the maths based on the chosen operator
    switch (selectedOperator) {
        case "+":
            ans = valOne + valTwo;
            outputElem.textContent = ans;
            break;
        case "-":
            ans = valOne - valTwo;
            outputElem.textContent = ans;
            break;
        case "*":
            ans = valOne * valTwo;
            outputElem.textContent = ans;
            break;
        case "/":
            ans = valOne / valTwo;
            outputElem.textContent = ans;
            break;
        default:
        // No operator chosen: do nothing
    }
});