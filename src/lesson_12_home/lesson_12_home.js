import './lesson_12_home.scss';

function switcher(block, all = false) {
    const btns = block.querySelectorAll('button');
    const bulbs = block.querySelectorAll('.bulb');

    if (all) {
        bulbs.forEach(function (bulb) {
            bulb.classList.remove('active')
        })
    }

    btns.forEach(function (btn) {
        btn.onclick = () => changeColor(btn.parentNode.querySelector('.bulb'));
    });

    function changeColor(btn) {
        btn.classList.toggle('active');
    }
}

switcher(document.querySelector('.buttons-panel'));
document.getElementById('btn-disable-all').onclick = function () {
    switcher(document.querySelector('.buttons-panel'), true);
};

