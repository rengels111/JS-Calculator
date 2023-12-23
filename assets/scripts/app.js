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

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  descAndOutput(initialResult, "+", enteredNumber);
  writeToLog(enteredNumber, "ADD", initialResult, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  descAndOutput(initialResult, "-", enteredNumber);
  writeToLog(enteredNumber, "SUBTRACT", initialResult, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  descAndOutput(initialResult, "*", enteredNumber);
  writeToLog(enteredNumber, "MULTIPLY", initialResult, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  descAndOutput(initialResult, "/", enteredNumber);
  writeToLog(enteredNumber, "DIVIDE", initialResult, currentResult);
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
