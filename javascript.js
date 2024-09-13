console.log("Hello World");

// elements

// screen

const displayScreen = document.getElementById("innerDisplay");
let displayedOnScreen = [];
let equationOneNumbers = [];
let equationTwoNumbers = [];
let endOfEquation = false;
const noValue = 0;

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
const decimalPointButton = document.getElementById("decimalPoint")

let clickedNumberButton = undefined;

// equation buttons

const plusButton = document.getElementById("plus");
const equalsButton = document.getElementById("equals");
const minusButton = document.getElementById("minus");
const divideButton = document.getElementById("divide");
const timesButton = document.getElementById("times");
const clearButton = document.getElementById("clear");
const oneBackButton = document.getElementById("oneBack");

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


// event listeners for equation buttons and other features

window.addEventListener("load", () => {
    displayScreen.textContent=noValue;
});

decimalPointButton.addEventListener ("click", ()=>{
    clickedNumberButton=10
    clickedNumberButtonFunc();
  });

oneBackButton.addEventListener ("click", ()=> {
    if (equationOne===true) {
      if (equationOneNumbers.length<=1) {
        equationOneNumbers.pop();
        displayedOnScreen.pop();
        displayScreen.textContent=0; 
      } else if (equationOneNumbers.length>1) {
        let point = equationOneNumbers.pop();
          if (point==="0.") {
            equationOneNumbers.push(0);
            displayedOnScreen.pop().push(0);
          } else {
          displayedOnScreen.pop();
          screenItems();
        }
      }
    } else {
        if (equationTwoNumbers.length<=1) {
            equationTwoNumbers.pop();
            displayScreen.textContent=0; 
            displayedOnScreen.pop();
        }else if (equationTwoNumbers.length>1) {
            let point = equationTwoNumbers.pop();
              if (point==="0.") {
                equationTwoNumbers.push(0);
                displayedOnScreen.pop().push(0);
              } else {
              displayedOnScreen.pop();
              screenItems();
            }
        }
    }});


plusButton.addEventListener ("click", ()=> {
    if (minusEquation===true && equationOne===false && equationTwoNumbers.length===0|| divideEquation===true && equationOne===false && equationTwoNumbers.length===0|| timesEquation===true && equationOne===false && equationTwoNumbers.length===0) {
        displayScreen.textContent="+";
        equationOne=false;
        displayedOnScreen = [];
        plusEquation=true;
        timesEquation=false;
        divideEquation=false;
        minusEquation=false;
    }
    if (endOfEquation===true && displayedOnScreen!=="ERROR") {
        endOfEquation=false;
        displayScreen.textContent="+";
        equationOne=false;
        equationOneNumbers=[];
        equationTwoNumbers=[];
        equationOneNumbers.push(displayedOnScreen);
        displayedOnScreen = [];
        plusEquation=true;
        divideEquation=false;
        timesEquation=false;
        minusEquation=false;
    }
    if (equationOne===true) {
  displayScreen.textContent="+";
  equationOne=false;
  displayedOnScreen = [];
  plusEquation=true;
  timesEquation=false;
  divideEquation=false;
  minusEquation=false;
    }
});


minusButton.addEventListener ("click", ()=> {
    if (plusEquation===true && equationOne===false && equationTwoNumbers.length===0|| divideEquation===true && equationOne===false && equationTwoNumbers.length===0|| timesEquation===true && equationOne===false && equationTwoNumbers.length===0) {
        displayScreen.textContent="-";
        equationOne=false;
        displayedOnScreen = [];
        plusEquation=false;
        timesEquation=false;
        divideEquation=false;
        minusEquation=true;
    }
    if (endOfEquation===true && displayedOnScreen!=="ERROR") {
        endOfEquation=false;
        displayScreen.textContent="-";
        equationOne=false;
        equationOneNumbers=[];
        equationTwoNumbers=[];
        equationOneNumbers.push(displayedOnScreen);
        displayedOnScreen = [];
        minusEquation=true;
        timesEquation=false;
        plusEquation=false;
        divideEquation=false;
    }
    if (equationOne===true) {
  displayScreen.textContent="-";
  equationOne=false;
  displayedOnScreen = [];
  minusEquation=true;
  plusEquation=false;
  timesEquation=false;
  divideEquation=false;
    }
});

divideButton.addEventListener ("click", ()=> {
    if (minusEquation===true && equationOne===false && equationTwoNumbers.length===0|| plusEquation===true && equationOne===false && equationTwoNumbers.length===0|| timesEquation===true && equationOne===false && equationTwoNumbers.length===0) {
        displayScreen.textContent="/";
        equationOne=false;
        displayedOnScreen = [];
        plusEquation=false;
        timesEquation=false;
        divideEquation=true;
        minusEquation=false;
    }
    if (endOfEquation===true && displayedOnScreen!=="ERROR") {
        endOfEquation=false;
        displayScreen.textContent="/";
        equationOne=false;
        equationOneNumbers=[];
        equationTwoNumbers=[];
        equationOneNumbers.push(displayedOnScreen);
        displayedOnScreen = [];
        divideEquation=true;
        timesEquation=false;
        plusEquation=false;
        minusEquation=false;
    }
    if (equationOne===true) {
  displayScreen.textContent="/";
  equationOne=false;
  displayedOnScreen = [];
  divideEquation=true;
  timesEquation=false;
  plusEquation=false;
  minusEquation=false;
    }
});

timesButton.addEventListener ("click", ()=> {
    if (minusEquation===true && equationOne===false && equationTwoNumbers.length===0|| divideEquation===true && equationOne===false && equationTwoNumbers.length===0|| plusEquation===true && equationOne===false && equationTwoNumbers.length===0) {
        displayScreen.textContent="*";
        equationOne=false;
        displayedOnScreen = [];
        plusEquation=false;
        timesEquation=true;
        divideEquation=false;
        minusEquation=false;
    }
    if (endOfEquation===true && displayedOnScreen!=="ERROR") {
        endOfEquation=false;
        displayScreen.textContent="*";
        equationOne=false;
        equationOneNumbers=[];
        equationTwoNumbers=[];
        equationOneNumbers.push(displayedOnScreen);
        displayedOnScreen = [];
        timesEquation=true;
        minusEquation=false;
        plusEquation=false;
        divideEquation=false;
    }
    if (equationOne===true) {
  displayScreen.textContent="*";
  equationOne=false;
  displayedOnScreen = [];
  timesEquation=true;
  divideEquation=false;
  plusEquation=false;
  minusEquation=false;
    }
});

equalsButton.addEventListener ("click", ()=> {
  operate();
})

clearButton.addEventListener ("click", ()=> {
    endOfEquation=true;
    clickedNumberButton=undefined;
    displayedOnScreen = [];
    plusEquation=false;
    minusEquation=false;
    timesEquation=false;
    divideEquation=false;
    equationOne=true;
    equationOneNumbers = [];
    equationTwoNumbers = [];
    displayScreen.textContent=noValue;
  })

// functions

function operate (a,b) {
    a = parseFloat(equationOneNumbers.join(""));
    b = parseFloat(equationTwoNumbers.join(""));     
    if (plusEquation===true ) {
        displayedOnScreen =  a + b;
        if (displayedOnScreen>9999999) {
            displayScreen.textContent="ERROR";
            endOfEquation=true; 
            equationOne=true;           
        } else {
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true;
        equationOne=true;
        }
    } else if (minusEquation===true) {
        displayedOnScreen =  a - b;
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true;  
        equationOne=true;     
    } else if (divideEquation===true) {
        displayedOnScreen =  Math.round((a / b)*100000)/100000;
        if (displayedOnScreen===Infinity || a===0 && b===0) {
            displayScreen.textContent="ERROR"
            endOfEquation=true; 
            equationOne=true;
        } else {
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true; 
        equationOne=true;
        }
    } else if (timesEquation===true) {
        if (a===0 || b===0) {
            displayScreen.textContent="0";
            endOfEquation=true;  
            equationOne=true; 
        }else if (displayedOnScreen>9999999) {
            displayScreen.textContent="ERROR";
            endOfEquation=true;  
            equationOne=true;           
        } else {
        displayedOnScreen =  a * b;
        displayScreen.textContent=displayedOnScreen;
        endOfEquation=true;
        equationOne=true;
        } 
    }
}

function clickedNumberButtonFunc () {
    if (endOfEquation===true) {
        displayedOnScreen = [];
        plusEquation=false;
        minusEquation=false;
        timesEquation=false;
        divideEquation=false;
        equationOneNumbers = [];
        equationTwoNumbers = [];
        displayScreen.textContent=displayedOnScreen;
    }
    if (clickedNumberButton===0 && displayedOnScreen.length<=6 && displayedOnScreen.length===0) {
        endOfEquation=false;
        displayScreen.textContent=0;
        if (equationOne===true) {
            equationOneNumbers=[0];
            } else {
            equationTwoNumbers=[0];  
            }
    }
    if (clickedNumberButton===0 && displayedOnScreen.length<=6 && displayedOnScreen.length>=1) {
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
    } else if (clickedNumberButton===10 && displayedOnScreen.length<=6) {
        endOfEquation=false;
        if (!displayedOnScreen.includes(".") && displayedOnScreen!="") {
          displayedOnScreen.push(".");
          if (equationOne===true) {
              equationOneNumbers.push(".");
              } else {
              equationTwoNumbers.push(".");  
          }
            screenItems();
        }else{
            displayedOnScreen.push("0.");
            if (equationOne===true) {
                equationOneNumbers.push("0.");
                } else {
                equationTwoNumbers.push("0.");  
            }
              screenItems();  
        }
}};

function screenItems () {
    displayScreen.textContent=displayedOnScreen.join("");
}