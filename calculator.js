"use strict";

//16 buttons to program
//functions to multiply, add, subtract, divide get total

//future considerations
//add scientific functions
//add animations to the buttons
//add accessibility sound feedback

const container = document.getElementById("container");
const display = document.createElement("div");
const previousOperand = document.createElement("div");
const currentOperand = document.createElement("div");
const keypad = document.createElement("div");

display.id = "display";
currentOperand.id = "currentOperand";
currentOperand.setAttribute("class", "currentOperand");
currentOperand.setAttribute("data-prev-operand", "currentOperand");
// currentOperand.textContent = "0";
previousOperand.id = "previousOperand";
previousOperand.setAttribute("class", "previousOperand");
previousOperand.setAttribute("data-current-operand", "previousOperand");
keypad.id = "keypad";
container.appendChild(display);
display.appendChild(previousOperand);
display.appendChild(currentOperand);
container.appendChild(keypad);

for (let i = 0; i < 18; i++) {
  const btn = document.createElement("button");
  btn.className = "calcBtn";
  // btn.style.height = "100px";
  // btn.style.width = "100px";
  btn.textContent = i;
  switch (btn.textContent) {
    case "0":
      btn.textContent = "AC";
      btn.id = `btnClear`;
      btn.classList.add("clear");
      btn.setAttribute("data-key", `Delete`);
      break;
    case "1":
      btn.textContent = "/";
      btn.id = `btnDivide`;
      btn.classList.add("operator");
      btn.setAttribute("data-key", `NumpadDivide`);
      break;
    case "2":
      btn.textContent = "*";
      btn.id = `btnMultiply`;
      btn.classList.add("operator");
      btn.setAttribute("data-key", `NumpadMultiply`);
      break;
    case "3":
      btn.textContent = "-";
      btn.id = `btnSubtract`;
      btn.classList.add("operator");
      btn.setAttribute("data-key", `NumpadSubtract`);
      break;
    case "4":
      btn.textContent = "7";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "5":
      btn.textContent = "8";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "6":
      btn.textContent = "9";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "7":
      btn.textContent = "+";
      btn.id = `btnAdd`;
      btn.classList.add("operator");
      btn.setAttribute("data-key", `NumpadAdd`);
      break;
    case "8":
      btn.textContent = "4";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "9":
      btn.textContent = "5";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "10":
      btn.textContent = "6";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "11":
      btn.textContent = "=";
      btn.id = `btnEqual`;
      btn.classList.add("operator");
      btn.setAttribute("data-key", `NumpadEnter`);
      break;
    case "12":
      btn.textContent = "1";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "13":
      btn.textContent = "2";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "14":
      btn.textContent = "3";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "15":
      btn.textContent = "0";
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "16":
      btn.textContent = ".";
      btn.id = `btnDecimal`;
      btn.classList.add("number");
      btn.setAttribute("data-key", `NumpadDecimal`);
      break;
    case "17":
      btn.textContent = "⇦";
      btn.id = `btnDelete`;
      btn.classList.add("delete");
      btn.setAttribute("data-key", `Backspace`);
      window.addEventListener("keyup", clear);
      break;
    default:
      break;
  }
  btn.addEventListener("click", getClick);
  window.addEventListener("keydown", getKeypress);
  keypad.appendChild(btn);
}

function clear(e) {
  const key = document.querySelector(`.calcBtn[data-key="${e.code}"]`);
  if (!key) return;
  if (e.key === "Delete" || e.key === "Backspace") {
    previousOperand.textContent = `${e.key}`;
    setTimeout(() => {
      previousOperand.textContent = "";
    }, 1500);
  } else {
    return;
  }
}
function divide() {}
function multiply() {}
function subtract() {}
function add() {}
function calculate() {}
function backspace() {}

function getKeypress(e) {
  const key = document.querySelector(`.calcBtn[data-key="${e.code}"]`);
  // let a;
  if (!key) return;
  if (e.key === `Delete`) {
    currentOperand.textContent = "";
  } else if (currentOperand.textContent === "" && e.key === Number) {
    currentOperand.textContent = `${e.key}`;
  } else if (isNaN(e.key)) {
    switch (e.key) {
      case ".":
        break;
      case "/":
        previousOperand.textContent = `${e.code.slice(6)}`;
        divide();
        break;
      case "*":
        previousOperand.textContent = `${e.code.slice(6)}`;
        multiply();
        break;
      case "-":
        previousOperand.textContent = `${e.code.slice(6)}`;
        subtract();
        break;
      case "+":
        previousOperand.textContent = `${e.code.slice(6)}`;
        break;
      case "Enter":
        previousOperand.textContent = `${e.code.slice(6)}`;
        calculate();
        break;
      case "Backspace":
        previousOperand.textContent = `${e.code}`;
        backspace();
        break;
      default:
        break;
    }
  } else {
    let num = currentOperand.textContent;
    currentOperand.textContent = num.concat(e.key);
  }
  key.classList.add("selected");
  return `${e.key}`;
}

function getClick() {
  const key = this.dataset.key;
  let a;
  if (this.id === "btnDelete") {
    currentOperand.textContent = "0";
    previousOperand.textContent = `${this.textContent}`;
    setTimeout(() => {
      previousOperand.textContent = "";
    }, 1500);
  } else if (currentOperand.textContent === "0") {
    currentOperand.textContent = `${this.textContent}`;
  } else if (isNaN(this.textContent)) {
    switch (this.textContent) {
      case ".":
        break;
      case "/":
        previousOperand.textContent = `${key.slice(6)}`;
        a = currentOperand.textContent;

        currentOperand.textContent = "0";
        divide();
        break;
      case "*":
        previousOperand.textContent = `${key.slice(6)}`;
        a = currentOperand.textContent;

        currentOperand.textContent = "0";
        multiply();
        break;
      case "-":
        previousOperand.textContent = `${key.slice(6)}`;
        a = currentOperand.textContent;

        currentOperand.textContent = "0";
        subtract();
        break;
      case "+":
        previousOperand.textContent = `${key.slice(6)}`;
        a = currentOperand.textContent;

        currentOperand.textContent = add();
        break;
      case "Enter":
        previousOperand.textContent = `${key.slice(6)}`;
        calculate();
        break;
      default:
        break;
    }
  } else {
    let num = currentOperand.textContent;
    currentOperand.textContent = num.concat(this.textContent);
  }
  this.classList.add("selected");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("selected");
}

const keys = document.querySelectorAll(".calcBtn");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
