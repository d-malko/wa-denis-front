function Lamp(rootElement = document.querySelector('body')) {
    function render() {
        const btn = document.createElement('button');
        btn.style.width = '100px';
        btn.style.height = '100px';
        btn.addEventListener('click', () => {
            btn.style.backgroundColor = 'red';
        })
    }
    render();
}

export { Lamp };