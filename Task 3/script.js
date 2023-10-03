let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator === '') {
        firstOperand = currentInput;
        currentInput = '';
        operator = op;
    } else {
        calculateResult();
        operator = op;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function calculateResult() {
    let result;
    const secondOperand = currentInput;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}
