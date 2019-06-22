export class NewCommentForm {
    constructor(onSubmit, target = document.querySelector('body')) {
        this.target = target;
        this.onSubmit = onSubmit;
        this.render()
    }

    render() {

        this.header = document.createElement('form');
        this.header.classList.add('header');
        this.h1 = document.createElement('h1');
        this.h1.textContent = "todos";

        // this.inputAuthor = document.createElement('input');
        this.inputText = document.createElement('input');
        this.inputText.classList.add('new-todo');
        this.inputText.placeholder = "What needs to be done?";
        this.btn = document.createElement('button');

        this.header.addEventListener('submit', (e) => {
            e.preventDefault();
            const requestData = {
                // "author": this.inputAuthor.value,
                "text": this.inputText.value
            };
            
            this.onSubmit(requestData);
            this.inputText.value = ''
        });
        this.header.appendChild(this.h1);
        // this.header.appendChild(this.inputAuthor);
        this.header.appendChild(this.inputText);
        this.header.appendChild(this.btn);
        // this.todoApp.appendChild(this.header);
        this.target.appendChild(this.header);
    }
}