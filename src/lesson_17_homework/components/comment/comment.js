export class Comment {
    /***
     * @param comment
     * { 
     *   author: string
     *   text: string
     *   id: string
     *   date: Date
     * }
     * 
     */
    constructor(comment, onDelete, target = document.querySelector('body')) {
        this.target = target;
        this.comment = comment;
        this.onDelete = onDelete;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${hours}:${minutes} ${day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    render() {
        this.li =  document.createElement('li');
        this.todoDiv = document.createElement('div');
        this.todoDiv.classList.add('view');
        const checkBox = document.createElement('input');
        checkBox.classList.add('toggle');
        checkBox.type = "checkbox";
        this.edit = document.createElement('input');
        // edit.style.display = 'none';
        this.edit.classList.add('edit');
        document.edit = this.edit;
        this.label = document.createElement('label');
        // const date = document.createElement('span');
        const btn = document.createElement('button');
        btn.classList.add('destroy');
        this.li.addEventListener('dblclick', () => {
            const editInput = document.getElementsByClassName('edit');
            let textLength = editInput[0].value.length;
            this.li.classList.add('editing');
            this.label.style.display = 'none';
            this.edit.focus();
            this.edit.setSelectionRange(textLength, textLength);
        })
        this.li.addEventListener('focusout', () => {
            this.li.classList.remove('editing');
            this.label.style.display = 'block'; // TODO with class
        })


        btn.addEventListener('click', () => {
            this.onDelete(this.comment.id);
        });

        // date.textContent = this.formatDate(this.comment.date);
        this.label.textContent = this.comment.text;
        // span.textContent = this.comment.author;

        this.li.id = this.comment.id;

        this.li.appendChild(this.todoDiv);
        this.todoDiv.appendChild(checkBox);
        this.todoDiv.appendChild(this.label);
        this.li.appendChild(this.edit);
        // this.li.appendChild(date);
        this.li.appendChild(btn);

        this.target.appendChild(this.li);
    }
}