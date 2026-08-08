//Part1 
const isValidNumber = (input) => { return input !== null && isFinite(input) && !isNaN(input) && input.trim() !== ''; };


const parseValidNumber = (input) => {return isValidNumber(input) ? Number(input) : null;};

// ===== Function expressions: operations =====
// Contract: receive two NUMBERS, return a number.
const add      = function (a, b) { return a + b; };
const subtract = function (a, b) { return a - b; };
const multiply = function (a, b) { return a * b; };
const divide   = function (a, b) { return b !== 0 ? a / b : null; };
const getOperationFunction = function (op) { 
  switch (op) {
    case '+': return add;
    case '-': return subtract;
    case '*': return multiply;
    case '/': return divide;
    default: return null;
  }
};
// ===== Part 2 building blocks =====
const readNumbers = function () { 
    let numberslist = [];
    let input = prompt("Enter a number (or leave empty to finish):");
    while (input !== null && input.trim() !== "") {
        if (isValidNumber(input)) {
            numberslist.push(Number(input));
            alert("Current numbers: " + numberslist.join(", "));
        } else {
            alert("Invalid number format");
        }
        input = prompt("Enter a number (or leave empty to finish):");
    }
    return numberslist;
/* 
Collect numbers until the user finishes. 
- Prompt repeatedly for a number. 
- Stop when the entry is empty ("") or Cancel (null). 
- Valid number → add it to the list, then alert the running list in exactly this format: Current numbers: 3, 5, 8 
- Non-empty invalid entry → alert "Invalid number format", then prompt again. 
- Return the array of numbers. Use an array ([]) and push;
*/
};

/* operationCallback is one of the Part 1 function expressions passed in as an argument. */
const performCalculationOnNumbers = function (numbers, operationCallback) { 
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = operationCallback(result, numbers[i]);
        if (result === null) {
            return null;
        }
    }
    return result;
/* 
Higher-order function: combine ALL the numbers into ONE result. 
- operationCallback is ALREADY one of the operation functions (add / subtract / multiply / divide), passed in as an argument. Call it directly 
— do NOT call getOperationFunction() here. 
- Fold across the array: start from numbers[0], then apply the callback against each remaining element using a for/while loop. (No array methods such as reduce — use a plain loop.) 
- If any step returns null (divide by zero), stop and return null. 
- Return the final accumulated number (or null). 
*/
};
const runTwoNumberCalculator = function() {
        let operation = prompt("Enter an operation (+, -, *, /):");
        while (getOperationFunction(operation) === null) {
            operation = prompt("Invalid operation. Please enter one of +, -, *, /:");
        }
        let firstInput = prompt("Enter the first number:");
        while (!isValidNumber(firstInput)) {
            alert("Invalid number format");
            firstInput = prompt("Enter the first number:");
        }
        let secondInput = prompt("Enter the second number:");
        while (!isValidNumber(secondInput)) {
            alert("Invalid number format");
            secondInput = prompt("Enter the second number:");
        }
        let operationFunction = getOperationFunction(operation);
        let result = operationFunction(parseValidNumber(firstInput), parseValidNumber(secondInput));
        if (result === null) {
            alert("Error: Cannot divide by zero");
        } else {
            alert(firstInput + " " + operation + " " + secondInput + " = " + result);
        }
    }/*
1. Prompt for an operation; re-prompt until it is one of + - * / (use getOperationFunction() to check). 
2. Prompt for the FIRST number. If invalid, alert "Invalid number format" and re-prompt UNTIL valid, then parse it.   
3. Do the same for the SECOND number. 
4. Get the operation function and apply it to the two parsed numbers. 
5. If the result is null (divide by zero), alert the divide-by-zero message and stop; otherwise alert the full expression, e.g. 12 / 4 = 3.
*/

const runMultipleNumberCalculator = function () { 
    let operation = prompt("Enter an operation (+, -, *, /):");
    while(getOperationFunction(operation) === null) {
        operation = prompt("Invalid operation. Please enter one of +, -, *, /:");
    }
    let numbers = readNumbers();
    if (numbers.length === 0) {
        alert("No numbers were entered. Exiting.");
        return;
    }
    let operationFunction = getOperationFunction(operation);
    let result = performCalculationOnNumbers(numbers, operationFunction);
    if (result === null) {
        alert("Cannot divide by zero");
    } else {
        let expression = numbers.join(" " + operation + " ") + " = " + result;
        alert(expression);
    }
};
let calculatorType = prompt("Enter calculator type (0 for two numbers, 1 for multiple numbers):");
if (calculatorType === "0") {
  runTwoNumberCalculator();
} else if (calculatorType === "1") {
  runMultipleNumberCalculator();
} else {
  alert("No calculator selected");
}
/*  
1. Prompt for an operation; re-prompt until it is one of + - * /. 
2. Call readNumbers() to collect the list. (readNumbers stops on empty/Cancel; a non-empty invalid entry shows "Invalid number format" and re-prompts.) 
3. If the array is empty, alert a message and stop. 
4. Get the operation function, then pass it together with the numbers array into performCalculationOnNumbers(). 
5. If the result is null (divide by zero), alert the divide-by-zero message and stop; otherwise alert the full expression, e.g. 3 + 5 + 8 = 16. 
*/ 
