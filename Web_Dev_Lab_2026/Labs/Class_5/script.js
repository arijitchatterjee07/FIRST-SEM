/*** 
 * High-Level Language
 * Single Threaded Language
 * Interpreted Language
 * asyncronus*/

// es6(ecma script)-major changes made to JS after this

// Hoisting : Memory assigned first , then execution;
// Temporal Dead Zone




let add = document.getElementById('a');
let sub = document.getElementById('s');
let mul = document.getElementById('p');
let div = document.getElementById('d');

let input1 = document.getElementById('inputOne');
let input2 = document.getElementById('inputTwo');

let calc = document.getElementById('calculate');

let output = document.getElementById('output');
output.textContent = 0;

let selectedOperator = '';
let selectedElement = null;

add.addEventListener("click", function () {
    if (selectedElement) {
        selectedElement.style.backgroundColor = "";
        selectedElement.style.color = "";
        selectedElement = add;
        selectedOperator = add.textContent;
        add.style.backgroundColor = "blue";
        add.style.color = "white";
    }
    else {
        selectedElement = add;
        selectedOperator = add.textContent;
        add.style.backgroundColor = "blue";
        add.style.color = "white";
    }
});

sub.addEventListener("click", function () {
    if (selectedElement) {
        selectedElement.style.backgroundColor = "";
        selectedElement.style.color = "";
        selectedElement = sub;
        selectedOperator = sub.textContent;
        sub.style.backgroundColor = "blue";
        sub.style.color = "white";
    }
    else {
        selectedElement = sub;
        selectedOperator = sub.textContent;
        sub.style.backgroundColor = "blue";
        sub.style.color = "white"
    }
});

mul.addEventListener("click", function () {
    if (selectedElement) {
        selectedElement.style.backgroundColor = "";
        selectedElement.style.color = "";
        selectedElement = mul;
        selectedOperator = mul.textContent;
        mul.style.backgroundColor = "blue";
        mul.style.color = "white";
    }
    else {
        selectedElement = mul;
        selectedOperator = mul.textContent;
        mul.style.backgroundColor = "blue";
        mul.style.color = "white";
    }
});

div.addEventListener("click", function () {
    if (selectedElement) {
        selectedElement.style.backgroundColor = "";
        selectedElement.style.color = "";
        selectedElement = div;
        selectedOperator = div.textContent;
        div.style.backgroundColor = "blue";
        div.style.color = "white";
    }
    else {
        selectedElement = div;
        selectedOperator = div.textContent;
        div.style.backgroundColor = "blue";
        div.style.color = "white";
    }
});

calc.addEventListener("click",function()
{
    let val1=input1.value;
    let val2=input2.value;
});