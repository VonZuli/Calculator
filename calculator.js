"use strict";
class Calculator {
  constructor(prevOperandTxtEl, currOperandTxtEl) {
    this.prevOperandTxtEl = prevOperandTxtEl;
    this.currOperandTxtEl = currOperandTxtEl;
    this.clearAll();
  }
  clearAll() {
    this.currentOperand = "";
    this.previousOperand = "";
    test.textContent = "";
    setTimeout(() => {
      test.textContent = "TEST";
    }, 1500);
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNum(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand =
      this.currentOperand.toString(number) + number.toString();
    test.textContent = number;
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let computate;
    const prev = +this.previousOperand;
    const curr = +this.currentOperand;
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        computate = prev + curr;
        break;
      case "-":
        computate = prev - curr;
        break;
      case "*":
        computate = prev * curr;
        break;
      case "/":
        computate = prev / curr;
        break;
      case "=":
        computate = prev + curr;
        break;
      default:
        return;
    }
    this.currentOperand = computate;
    this.operation = undefined;
    this.previousOperand = "";
  }
  getDisplayNum(num) {
    // let strNum = num + "";
    // strNum += "";
    const strNum = num.toString();
    const intNum = parseFloat(strNum.split(".")[0]);
    const decimal = strNum.split(".")[1];
    let intDisplay;
    if (isNaN(intNum)) {
      intDisplay = "";
    } else {
      intDisplay = intNum.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimal != null) {
      return `${intDisplay}.${decimal}`;
    } else {
      return intDisplay;
    }
    // const floatNum = +num;
    // if (isNaN(floatNum)) return "";
    // return floatNum.toLocaleString("en");
  }
  updateDisplay() {
    this.currOperandTxtEl.textContent = this.getDisplayNum(this.currentOperand);
    if (this.operation != null) {
      this.prevOperandTxtEl.textContent = `${this.getDisplayNum(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.prevOperandTxtEl.textContent = "";
    }
  }
}
//16 buttons to program
//functions to multiply, add, subtract, divide get total

//future considerations
//add scientific functions
//add animations to the buttons
//add accessibility sound feedback

const body = document.body;
const container = document.getElementById("container");
const display = document.createElement("div");
const previousOperand = document.createElement("div");
const currentOperand = document.createElement("div");
const keypad = document.createElement("div");
const test = document.createElement("div");

display.id = "display";
currentOperand.id = "currentOperand";
currentOperand.setAttribute("class", "currentOperand");
currentOperand.setAttribute("data-operand", "currentOperand");

previousOperand.id = "previousOperand";
previousOperand.setAttribute("class", "previousOperand");
previousOperand.setAttribute("data-operand", "previousOperand");

keypad.id = "keypad";
test.id = "test";
test.style.border = "10px solid blue";
test.style.font = "bold 50px Arial";
test.style.color = "Blue";
test.style.height = "50px";
test.style.margin = "50px auto";
test.style.padding = "50px";
test.style.width = "50%";
test.style.display = "flex";
test.style.justifyContent = "center";
test.style.alignItems = "center";
test.textContent = "TEST";

container.appendChild(display);
display.appendChild(previousOperand);
display.appendChild(currentOperand);
container.appendChild(keypad);
body.appendChild(test);

// const calculator = new Calculator(previousOperand, currentOperand);

for (let i = 0; i < 18; i++) {
  const btn = document.createElement("button");
  btn.className = "calcBtn";
  btn.textContent = i;

  function setHTMLAttributes() {
    if (!isNaN(btn.textContent)) {
      btn.id = `btn${btn.textContent}`;
      btn.classList.add("number");
      btn.setAttribute("data-number", btn.textContent);
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
    } else if (btn.textContent === ".") {
      btn.id = `btnDecimal`;
      btn.classList.add("number");
      btn.setAttribute("data-number", `${btn.id.slice(3)}`);
      btn.setAttribute("data-key", `Numpad${btn.id.slice(3)}`);
    } else if (btn.textContent === "=") {
      btn.id = `btnEqual`;
      btn.classList.add("operator");
      btn.setAttribute("data-equals", `${btn.id.slice(3)}`);
      btn.setAttribute("data-key", `NumpadEnter`);
    } else if (btn.textContent === "⇦") {
      btn.id = `btnBackspace`;
      btn.classList.add("delete");
      btn.setAttribute("data-delete", `${btn.id.slice(3)}`);
      btn.setAttribute("data-key", `Backspace`);
      window.addEventListener("keyup", clear);
    } else if (btn.textContent === "AC") {
      btn.id = `btnClear`;
      btn.classList.add("clear");
      btn.setAttribute("data-clear", `${btn.id.slice(3)}`);
      btn.setAttribute("data-key", `Delete`);
    } else {
      btn.classList.add("operator");
      btn.setAttribute("data-operation", `${btn.id.slice(3)}`);
      btn.setAttribute("data-key", `Numpad${btn.id.slice(3)}`);
    }
  }
  switch (btn.textContent) {
    case "0":
      btn.textContent = "AC";
      break;
    case "1":
      btn.textContent = "/";
      btn.id = `btnDivide`;
      break;
    case "2":
      btn.textContent = "*";
      btn.id = `btnMultiply`;
      break;
    case "3":
      btn.textContent = "-";
      btn.id = `btnSubtract`;
      break;
    case "4":
      btn.textContent = "7";
      break;
    case "5":
      btn.textContent = "8";
      break;
    case "6":
      btn.textContent = "9";
      break;
    case "7":
      btn.textContent = "+";
      btn.id = `btnAdd`;
      break;
    case "8":
      btn.textContent = "4";
      break;
    case "9":
      btn.textContent = "5";
      break;
    case "10":
      btn.textContent = "6";
      break;
    case "11":
      btn.textContent = "=";
      break;
    case "12":
      btn.textContent = "1";
      break;
    case "13":
      btn.textContent = "2";
      break;
    case "14":
      btn.textContent = "3";
      break;
    case "15":
      btn.textContent = "0";
      break;
    case "16":
      btn.textContent = ".";
      break;
    case "17":
      btn.textContent = "⇦";
      break;
    default:
      break;
  }
  setHTMLAttributes();
  btn.addEventListener("dblclick", getClick);
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

const numberKey = document.querySelectorAll(`[data-number]`);
const operandKey = document.querySelectorAll(`[data-operation]`);
const equalKey = document.querySelectorAll(`[data-equals]`);
const backKey = document.querySelectorAll(`[data-delete]`);
const clearKey = document.querySelectorAll(`[data-clear]`);
const prevOperandTxtEl = document.querySelector(
  `[data-operand=${previousOperand.id}]`
);
const currOperandTxtEl = document.querySelector(
  `[data-operand=${currentOperand.id}]`
);

// console.log(numberKey);
// console.log(operandKey);
// console.log(equalKey);
// console.log(backKey);
// console.log(clearKey);
const calculator = new Calculator(prevOperandTxtEl, currOperandTxtEl);

numberKey.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.textContent);
    calculator.updateDisplay();
  });
});
operandKey.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});
equalKey.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.calculate(button.textContent);
    calculator.updateDisplay();
  });
});
clearKey.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.clearAll();
    calculator.updateDisplay();
  });
});
backKey.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
  });
});

function getClick() {
  //   // const numberKey = this.dataset.number;
  //   // const operandKey = this.dataset.operation;
  //   // const equalKey = this.dataset.equals;
  //   // const backKey = this.dataset.delete;
  //   // const clearKey = this.dataset.clear;
  //   // if (this.id === "btnClear") {
  //   //   calculator.clearAll();
  //   // } else if (currentOperand.textContent === "") {
  //   //   currentOperand.textContent = `${this.textContent}`;
  //   // } else if (isNaN(this.textContent)) {
  //   //   switch (this.textContent) {
  //   //     case ".":
  //   //       break;
  //   //     case "/":
  //   //       previousOperand.textContent = operandKey;
  //   //       currentOperand.textContent = "0";
  //   //       divide();
  //   //       break;
  //   //     case "*":
  //   //       previousOperand.textContent = operandKey;
  //   //       currentOperand.textContent = "0";
  //   //       multiply();
  //   //       break;
  //   //     case "-":
  //   //       previousOperand.textContent = operandKey;
  //   //       currentOperand.textContent = "0";
  //   //       subtract();
  //   //       break;
  //   //     case "+":
  //   //       previousOperand.textContent = operandKey;
  //   //       add();
  //   //       break;
  //   //     case "Enter":
  //   //       previousOperand.textContent = operandKey;
  //   //       calculate();
  //   //       break;
  //   //     default:
  //   //       break;
  //   //   }
  //   // } else {
  //   //   let num = currentOperand.textContent;
  //   //   currentOperand.textContent = num.concat(this.textContent);
  //   // }
  //   // this.classList.add("selected");
}

//remove animation on buttons
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("selected");
}

const keys = document.querySelectorAll(".calcBtn");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
