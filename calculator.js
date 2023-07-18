"use strict";
import { buildCalc } from "./buildCalc.js";
buildCalc();
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
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
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

    this.currentOperand = Math.abs(computate.toPrecision(15));
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
// function divide() {}
// function multiply() {}
// function subtract() {}
// function add() {}
// function calculate() {}
// function backspace() {}
// window.addEventListener("keydown", getKeypress);
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
        // divide();
        break;
      case "*":
        previousOperand.textContent = `${e.code.slice(6)}`;
        // multiply();
        break;
      case "-":
        previousOperand.textContent = `${e.code.slice(6)}`;
        // subtract();
        break;
      case "+":
        previousOperand.textContent = `${e.code.slice(6)}`;
        break;
      case "Enter":
        previousOperand.textContent = `${e.code.slice(6)}`;
        // calculate();
        break;
      case "Backspace":
        previousOperand.textContent = `${e.code}`;
        // backspace();
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
//#region
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
    button.classList.add("selected");
    calculator.appendNum(button.textContent);
    calculator.updateDisplay();
  });
  button.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.calcBtn[data-key="${e.code}"]`);
    button.classList.add("selected");
    calculator.appendNum(key.textContent);
    calculator.updateDisplay();
  });
});
operandKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});
equalKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.calculate(button.textContent);
    calculator.updateDisplay();
  });
});
clearKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.clearAll();
    calculator.updateDisplay();
  });
});
backKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.delete();
    calculator.updateDisplay();
  });
});
//#endregion
//remove animation on buttons
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("selected");
}

const keys = document.querySelectorAll(".calcBtn");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
