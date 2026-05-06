const display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.value = currentInput;   // ✅ FIXED
}

function addToInput(value) {
    if (currentInput === '0' && !['+', '-', '/', '*', '(', ')'].includes(value)) {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
}

function calculate() {
    if (!currentInput || currentInput.trim() === '') {
        currentInput = 'Error';
        updateDisplay();
        return;
    }

    try {
        const result = eval(currentInput);

        currentInput = isNaN(result)
            ? 'Error'
            : !isFinite(result)
                ? 'Infinity'
                : result.toString();

    } catch (error) {
        currentInput = 'Error';
    }

    updateDisplay();
}

// Number buttons
for (let i = 0; i <= 9; i++) {
    const button = document.getElementById(i.toString());
    if (button) {
        button.addEventListener('click', () => addToInput(i.toString()));
    }
}

// Operators
document.getElementById('plus').addEventListener('click', () => addToInput('+'));
document.getElementById('-').addEventListener('click', () => addToInput('-'));
document.getElementById('divi').addEventListener('click', () => addToInput('/'));
document.getElementById('*').addEventListener('click', () => addToInput('*'));
document.getElementById('op').addEventListener('click', () => addToInput('('));
document.getElementById('cl').addEventListener('click', () => addToInput(')'));

// Special buttons
document.getElementById('C').addEventListener('click', clearAll);
document.getElementById('back').addEventListener('click', backspace);
document.getElementById('equal').addEventListener('click', calculate);

updateDisplay();