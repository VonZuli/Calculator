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

    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNum(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand =
      this.currentOperand.toString(number) + number.toString();
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
        if (prev === 0 && curr === 0) {
          const modal = document.querySelector(".modal");
          modal.style.display = "block";
          setTimeout(() => {
            modal.style.display = "none";
          }, 3000);
          break;
        }
        computate = prev / curr;
        break;
      case "=":
        computate = prev + curr;
        break;
      default:
        return;
    }

    // this.currentOperand = Math.abs(computate.toPrecision(15));
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

const calculator = new Calculator(prevOperandTxtEl, currOperandTxtEl);
window.addEventListener("keyup", handleKeypress);

function handleKeypress(e) {
  const key = document.querySelector(`.calcBtn[data-key="${e.code}"]`);
  key.classList.add("selected");
  if (!key) return;
  switch (e.key) {
    case "+":
      calculator.chooseOperation(key.textContent);
      calculator.updateDisplay();
      break;
    case "-":
      calculator.chooseOperation(key.textContent);
      calculator.updateDisplay();
      break;
    case "*":
      calculator.chooseOperation(key.textContent);
      calculator.updateDisplay();
      break;
    case "/":
      calculator.chooseOperation(key.textContent);
      calculator.updateDisplay();
      break;
    case "Enter":
      calculator.calculate(key.textContent);
      calculator.updateDisplay();
      break;
    case "Backspace":
      calculator.delete();
      calculator.updateDisplay();
      break;
    case "Delete":
      calculator.clearAll();
      calculator.updateDisplay();
      break;

    default:
      calculator.appendNum(key.textContent);
      calculator.updateDisplay();
      break;
  }
}

numberKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.appendNum(button.textContent);
    calculator.updateDisplay();
  });
  button.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleKeypress(e.key);
  });
});
operandKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
  button.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleKeypress(e.key);
  });
});
equalKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.calculate(button.textContent);
    calculator.updateDisplay();
  });
  button.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleKeypress(e.key);
  });
});
clearKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.clearAll();
    calculator.updateDisplay();
  });
  button.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleKeypress();
  });
});
backKey.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("selected");
    calculator.delete();
    calculator.updateDisplay();
  });
  button.addEventListener("keyup", (e) => {
    e.preventDefault();
    handleKeypress();
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
