console.log("Hello World");

// elements

// screen

const displayScreen = document.getElementById("innerDisplay");
let displayedOnScreen = [];

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

// functions

function clickedNumberButtonFunc () {
    if (clickedNumberButton===0 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(0);
        screenItems();
    } else if (clickedNumberButton===1 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(1);
        screenItems();
    } else if (clickedNumberButton===2 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(2);
        screenItems();
    } else if (clickedNumberButton===3 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(3);
        screenItems();
    } else if (clickedNumberButton===4 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(4);
        screenItems();
    } else if (clickedNumberButton===5 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(5);
        screenItems();
    } else if (clickedNumberButton===6 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(6);
        screenItems();
    } else if (clickedNumberButton===7 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(7);
        screenItems();
    } else if (clickedNumberButton===8 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(8);
        screenItems();
    } else if (clickedNumberButton===9 && displayedOnScreen.length<=6) {
        displayedOnScreen.push(9);
        screenItems();
}};

function screenItems () {
    displayScreen.textContent=displayedOnScreen.join("");
}