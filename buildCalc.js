"use strict";
export function buildCalc() {
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

    keypad.appendChild(btn);
  }
}
