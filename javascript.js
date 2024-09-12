console.log("Hello World");

// elements

// screen

const displayScreen = document.getElementById("innerDisplay");
let displayedOnScreen = [];
let equationOneNumbers = [];
let equationTwoNumbers = [];
let endOfEquation = false;

// number buttons

const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

let clickedNumberButton = undefined;

// equation buttons

const plusButton = document.getElementById("plus");
const equalsButton = document.getElementById("equals");
const minusButton = document.getElementById("minus");
const divideButton = document.getElementById("divide");
const timesButton = document.getElementById("times");
const clearButton = document.getElementById("clear");

const allButtons ="+-*%="
let equationOne = true;
let plusEquation = false;
let minusEquation = false;
let divideEquation = false;
let timesEquation = false;

// event listeners for the number buttons

zeroButton.addEventListener ("click", ()=>{
  clickedNumberButton=0
  clickedNumberButtonFunc();
});

oneButton.addEventListener ("click", ()=>{
  clickedNumberButton=1
  clickedNumberButtonFunc();
});

twoButton.addEventListener ("click", ()=>{
  clickedNumberButton=2
  clickedNumberButtonFunc();
});

threeButton.addEventListener ("click", ()=>{
  clickedNumberButton=3
  clickedNumberButtonFunc();
});

fourButton.addEventListener ("click", ()=>{
  clickedNumberButton=4
  clickedNumberButtonFunc();
});

fiveButton.addEventListener ("click", ()=>{
  clickedNumberButton=5
  clickedNumberButtonFunc();
});

sixButton.addEventListener ("click", ()=>{
  clickedNumberButton=6
  clickedNumberButtonFunc();
});

sevenButton.addEventListener ("click", ()=>{
  clickedNumberButton=7
  clickedNumberButtonFunc();
});

eightButton.addEventListener ("click", ()=>{
  clickedNumberButton=8
  clickedNumberButtonFunc();
});

nineButton.addEventListener ("click", ()=>{
  clickedNumberButton=9
  clickedNumberButtonFunc();
});

// event listeners for equation buttons

plusButton.addEventListener ("click", ()=> {
    if (equationOne===true) {
  displayScreen.textContent="+";
  equationOne=false;
  displayedOnScreen = [];
  plusEquation=true;
    }
});

minusButton.addEventListener ("click", ()=> {
    if (equationOne===true) {
  displayScreen.textContent="-";
  equationOne=false;
  displayedOnScreen = [];
  minusEquation=true;
    }
});

divideButton.addEventListener ("click", ()=> {
    if (equationOne===true) {
  displayScreen.textContent="%";
  equationOne=false;
  displayedOnScreen = [];
  divideEquation=true;
    }
});

timesButton.addEventListener ("click", ()=> {
    if (equationOne===true) {
  displayScreen.textContent="*";
  equationOne=false;
  displayedOnScreen = [];
  timesEquation=true;
    }
});

equalsButton.addEventListener ("click", ()=> {
  operate();
})

clearButton.addEventListener ("click", ()=> {
    endOfEquation=true;
    clickedNumberButton=undefined;
    clickedNumberButtonFunc();
  })

// functions

function operate (a,b) {
    a = parseInt(equationOneNumbers.join(""));
    b = parseInt(equationTwoNumbers.join(""));
    if (plusEquation===true ) {
        displayedOnScreen =  a + b;
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true;
    } else if (minusEquation===true) {
        displayedOnScreen =  a - b;
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true;       
    } else if (divideEquation===true) {
        displayedOnScreen =  a / b;
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true; 
    } else if (timesEquation===true) {
        displayedOnScreen =  a * b;
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true; 
    }
}

function clickedNumberButtonFunc () {
    if (endOfEquation===true) {
        displayedOnScreen = [];
        plusEquation=false;
        minusEquation=false;
        timesEquation=false;
        divideEquation=false;
        equationOne=true;
        equationOneNumbers = [];
        equationTwoNumbers = [];
        displayScreen.textContent=displayedOnScreen;
    }
    if (clickedNumberButton===0 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(0);
        if (equationOne===true) {
        equationOneNumbers.push(0);
        } else {
        equationTwoNumbers.push(0);  
        }
        screenItems();
    } else if (clickedNumberButton===1 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(1);
        if (equationOne===true) {
            equationOneNumbers.push(1);
            } else {
            equationTwoNumbers.push(1);  
        }
            screenItems();
    } else if (clickedNumberButton===2 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(2);
        if (equationOne===true) {
            equationOneNumbers.push(2);
            } else {
            equationTwoNumbers.push(2);  
        }
            screenItems();
    } else if (clickedNumberButton===3 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(3);
        if (equationOne===true) {
            equationOneNumbers.push(3);
            } else {
            equationTwoNumbers.push(3);  
        }
            screenItems();
    } else if (clickedNumberButton===4 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(4);
        if (equationOne===true) {
            equationOneNumbers.push(4);
            } else {
            equationTwoNumbers.push(4);  
        }
            screenItems();
    } else if (clickedNumberButton===5 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(5);
        if (equationOne===true) {
            equationOneNumbers.push(5);
            } else {
            equationTwoNumbers.push(5);  
        }
            screenItems();
    } else if (clickedNumberButton===6 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(6);
        if (equationOne===true) {
            equationOneNumbers.push(6);
            } else {
            equationTwoNumbers.push(6);  
        }
            screenItems();
    } else if (clickedNumberButton===7 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(7);
        if (equationOne===true) {
            equationOneNumbers.push(7);
            } else {
            equationTwoNumbers.push(7);  
        }
            screenItems();
    } else if (clickedNumberButton===8 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(8);
        if (equationOne===true) {
            equationOneNumbers.push(8);
            } else {
            equationTwoNumbers.push(8);  
        }
            screenItems();
    } else if (clickedNumberButton===9 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        displayedOnScreen.push(9);
        if (equationOne===true) {
            equationOneNumbers.push(9);
            } else {
            equationTwoNumbers.push(9);  
        }
            screenItems();
}};

function screenItems () {
    displayScreen.textContent=displayedOnScreen.join("");
}
/*
function equalsButtonFunc () {
    if (displayScreen.includes(allButtons)) {
        let fullEquation = displayedOnScreen.join("");

    }
}*/