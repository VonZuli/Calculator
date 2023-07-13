"use strict";

//16 buttons to program
//functions to multiply, add, subtract, divide get total

//future considerations
//add scientific functions
//add animations to the buttons
//add accessibility sound feedback

const container = document.getElementById("container");
const displayInput = document.createElement("textarea");
const displayOutput = document.createElement("textarea");
const keypad = document.createElement("div");

displayInput.id = "displayInput";
displayInput.style.resize = "none";
displayOutput.id = "displayOutput";
displayOutput.style.resize = "none";
keypad.id = "keypad";
container.appendChild(displayInput);
container.appendChild(displayOutput);
container.appendChild(keypad);

for (let i = 0; i < 17; i++) {
  const btn = document.createElement("button");
  btn.className = "calcBtn";
  btn.style.height = "100px";
  btn.style.width = "100px";
  btn.textContent = i;
  switch (btn.textContent) {
    case "0":
      btn.textContent = "Delete";
      btn.id = `btnDelete`;
      btn.setAttribute("data-key", `Delete`);
      window.addEventListener("keyup", clear);
      window.removeEventListener("keydown", getKeypress);
      break;
    case "1":
      btn.textContent = "/";
      btn.id = `btnDivide`;
      btn.setAttribute("data-key", `NumpadDivide`);
      break;
    case "2":
      btn.textContent = "*";
      btn.id = `btnMultiply`;
      btn.setAttribute("data-key", `NumpadMultiply`);
      break;
    case "3":
      btn.textContent = "-";
      btn.id = `btnSubtract`;
      btn.setAttribute("data-key", `NumpadSubtract`);
      break;
    case "4":
      btn.textContent = "7";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      btn.value = 7;
      break;
    case "5":
      btn.textContent = "8";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "6":
      btn.textContent = "9";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "7":
      btn.textContent = "+";
      btn.id = `btnAdd`;
      btn.setAttribute("data-key", `NumpadAdd`);
      break;
    case "8":
      btn.textContent = "4";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "9":
      btn.textContent = "5";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "10":
      btn.textContent = "6";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "11":
      btn.textContent = "=";
      btn.id = `btnEqual`;
      btn.setAttribute("data-key", `NumpadEnter`);
      break;
    case "12":
      btn.textContent = "1";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "13":
      btn.textContent = "2";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "14":
      btn.textContent = "3";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "15":
      btn.textContent = "0";
      btn.id = `btn${btn.textContent}`;
      btn.setAttribute("data-key", `Numpad${btn.textContent}`);
      break;
    case "16":
      btn.textContent = ".";
      btn.id = `btnDecimal`;
      btn.setAttribute("data-key", `NumpadDecimal`);
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
  if (e.key === "Delete") {
    displayOutput.textContent = `${e.key}`;
    setTimeout(() => {
      displayOutput.textContent = "";
    }, 1500);
  } else {
    return;
  }
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
let array = [];

function getKeypress(e) {
  const key = document.querySelector(`.calcBtn[data-key="${e.code}"]`);
  // const secondaryKey = document.querySelector(
  //   `.calcBtn[data-secondary="${e.code}"]`
  // );
  // const deleteKey = document.querySelector(`.calcBtn[data-key="Delete"]`);
  if (!key) return;
  if (e.key === `Delete`) {
    displayInput.textContent = "";
  } else {
    array.push(+e.key);
    console.log(array);
    displayInput.textContent = `${e.key}`;
  }
  key.classList.add("selected");
  return `${e.key}`;
}
function getClick(e) {
  // const key = document.querySelector(`.calcBtn`);
  this.classList.add("selected");
  displayInput.textContent = this.textContent;
  console.log(this.textContent);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("selected");
}

const keys = document.querySelectorAll(".calcBtn");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
