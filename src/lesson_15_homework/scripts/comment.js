import { CommentList} from "./commentList";

export  class Comment {
    constructor(rootElement = document.querySelector('body'), data) {
        this.rootElement = rootElement;
        this.data = data;
        this.covered = false;
    }
    render() {
        this.message = document.createElement('li');
        this.message.classList.add('comment');

        this.messageUsername = document.createElement('h3');
        this.messageUsername.classList.add('comment__username');
        this.messageUsername.textContent = this.data.username;

        this.messageText = document.createElement('p');
        this.messageText.classList.add('comment__text');
        this.messageText.textContent = this.data.comment;

        this.messageDate = document.createElement('h4');
        this.messageDate.classList.add('comment__date');
        this.messageDate.textContent = this.data.dateTime + "  " + this.data.id;

        this.commentDeleter = document.createElement('button');
        this.commentDeleter.textContent = 'Delete comment';
        this.commentDeleter.classList.add('comment__delete-btn');


        this.message.appendChild(this.messageUsername);
        this.message.appendChild(this.messageText);
        this.message.appendChild(this.messageDate);
        this.message.appendChild(this.commentDeleter);
        this.rootElement.appendChild(this.message);

        this.commentDeleter.addEventListener('click', () => {
            this.deleteComment(this.data.id);
            console.log(this.data.id);
        });
    }

    deleteComment(id) {
        this.rootElement.removeChild(this.rootElement.childNodes[id]);
    }
}