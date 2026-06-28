// CALCULATOR SCRIPT    

const display = document.getElementById('display');
const operators = ['+', '-', '*', '/'];

function appendToDisplay(input) {
    display.value += input;
    updateButtonState();
}

function appendOperator(input) {
    const lastChar = display.value.slice(-1);
    if (!display.value || operators.includes(lastChar)) {
        return;
    }
    display.value += input;
    updateButtonState();
}

function clearDisplay() {
    display.value = '';
    updateButtonState();
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
    updateButtonState();
}

function updateButtonState() {
    const lastChar = display.value.slice(-1);
    const isOperator = operators.includes(lastChar);
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(btn => btn.disabled = isOperator);
}

document.addEventListener('DOMContentLoaded', updateButtonState);