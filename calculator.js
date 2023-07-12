"use strict";

//16 buttons to program
//functions to multiply, add, subtract, divide get total

//future considerations
//add scientific functions
//add animations to the buttons
//add accessibility sound feedback

const container = document.getElementById("container");
const input = document.createElement("textarea");
const keypad = document.createElement("div");

input.id = "input";
input.style.width = "50%";
input.style.resize = "none";
keypad.id = "keypad";
container.appendChild(input);
container.appendChild(keypad);

for (let i = 0; i < 17; i++) {
  const btn = document.createElement("button");
  btn.className = "calcBtn";
  btn.style.height = "100px";
  btn.style.width = "100px";
  btn.textContent = i;
  switch (btn.textContent) {
    case "0":
      btn.textContent = "C";
      btn.id = `btnClear`;
      btn.addEventListener("click", clear);
      break;
    case "1":
      btn.textContent = "/";
      btn.id = `btnDivide`;
      btn.addEventListener("click", divide);
      break;
    case "2":
      btn.textContent = "*";
      btn.id = `btnMultiply`;
      btn.addEventListener("click", multiply);
      break;
    case "3":
      btn.textContent = "-";
      btn.id = `btnSubtract`;
      btn.addEventListener("click", subtract);
      break;
    case "4":
      btn.textContent = "7";
      btn.id = `btn${btn.textContent}`;
      btn.value = 7;
      break;
    case "5":
      btn.textContent = "8";
      btn.id = `btn${btn.textContent}`;
      break;
    case "6":
      btn.textContent = "9";
      btn.id = `btn${btn.textContent}`;
      break;
    case "7":
      btn.textContent = "+";
      btn.id = `btnAdd`;
      btn.addEventListener("click", add);
      break;
    case "8":
      btn.textContent = "4";
      btn.id = `btn${btn.textContent}`;
      break;
    case "9":
      btn.textContent = "5";
      btn.id = `btn${btn.textContent}`;
      break;
    case "10":
      btn.textContent = "6";
      btn.id = `btn${btn.textContent}`;
      break;
    case "11":
      btn.textContent = "=";
      btn.id = `btnEqual`;
      btn.addEventListener("click", equal);
      break;
    case "12":
      btn.textContent = "1";
      btn.id = `btn${btn.textContent}`;
      break;
    case "13":
      btn.textContent = "2";
      btn.id = `btn${btn.textContent}`;
      break;
    case "14":
      btn.textContent = "3";
      btn.id = `btn${btn.textContent}`;
      break;
    case "15":
      btn.textContent = "0";
      btn.id = `btn${btn.textContent}`;
      break;
    case "16":
      btn.textContent = ".";
      btn.id = `btnDecimal`;
      break;

    default:
      break;
  }
  keypad.appendChild(btn);
}

function clear() {
  console.log("Clear");
}

function divide() {
  console.log(this.textContent);
}
function multiply() {
  console.log(this.textContent);
}
function subtract() {
  console.log(this.textContent);
}
function add() {
  console.log(this.textContent);
}
function equal() {
  console.log(this.textContent);
}
function seven() {
  console.log(this.value, typeof this.value);
}
