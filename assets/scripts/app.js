const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = []

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function descAndOutput(prevResult, operator, calcNumber) {
  const calcDescription = `${prevResult} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(calcNumber, operator, prevResult, result) {
  const logEntry = {
    number: calcNumber,
    operation: operator,
    prevResult: prevResult,
    result: result
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  descAndOutput(initialResult, mathOperator, enteredNumber);
  writeToLog(enteredNumber, calculationType, initialResult, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY")
}

function divide() {
  calculateResult("DIVIDE");
}

function clear() {
  currentResult = 0;
  outputResult(currentResult, "Cleared");
  logEntries = [];
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);
