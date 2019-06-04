import './lesson_11.scss';

function getRandomInteger() {
    return Math.floor(Math.random() * 256)
}

function getRandomColor() {
    const randomRed = getRandomInteger();
    const randomGreen = getRandomInteger();
    const randomBlue = getRandomInteger();

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

function switcher(btn) {
    function changeColor() {
        btn.classList.toggle('btn_active');
        btn.textContent = 'Hello world!';

        btn.style.backgroundColor = getRandomColor();
    }

    btn.onclick = changeColor;
}

function textCreator(textBlock){
    const btn =  textBlock.querySelector('.btn');
    const span = textBlock.querySelector('.output');

    function openPrompt() {
        const text = prompt('Enter message');
        span.textContent = text;
    }

    btn.onclick = openPrompt;
}

textCreator(document.querySelector('#textBlock'));
// switcher(document.querySelector('#testBtn'));