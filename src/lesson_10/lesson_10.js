import './lesson_10.scss';

const btn = document.querySelector('#calculatorBtn');

btn.onclick = calculate;

function calculate() {
    const a = prompt('operator A');
    const b = prompt('operand B');
    const operator = prompt('Enter +, -, *  or /');

    if (Boolean(a) === false
        || Boolean(b) === false
        || isNaN(Number(a))
        || isNaN(Number(b))
    ) {
        alert('Please enter valid operands');
    } else {
        if (operator === '+') {
            add();
        } else if (operator === '-') {
            subtract()
        } else if (operator === '*') {
            multiply()
        } else if (operator === '/') {
            divide()
        } else {
            alert('Operator invalid!');
        }
    }

    function add() {
        alert('Result: ' + Number(a) + Number(b));
    }
    function subtract() {
        alert('Result: ' + Number(a) - Number(b));
    }
    function multiply() {
        alert('Result: ' + Number(a) * Number(b));
    }
    function divide() {
        if (Number(b) !== 0) {
            alert('Result: ' + Number(a) / Number(b));
        }
    }
}