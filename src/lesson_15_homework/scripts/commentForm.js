import {CommentList} from "./commentList";

export class CommentForm {

    constructor(rootElement = document.querySelector('body')) {
        this.rootElement = rootElement;
    }

    render() {
        this.commentsForm = document.createElement("form");
        this.commentsForm.addEventListener("submit", function (test) {
            test.preventDefault();

        });

        this.commentsForm.classList.add('comments-form');

        this.username = document.createElement("input");
        this.username.classList.add('comments-form__username');
        this.username.setAttribute('type', "text");

        this.commentText = document.createElement("textarea");
        this.commentText.classList.add('comments-form__text');

        this.commentText.setAttribute('type', "text");
        this.commentAdder = document.createElement('button');
        this.commentAdder.textContent = 'Add comment';
        this.commentAdder.classList.add('comments-form__submit-btn');

        this.commentsForm.appendChild(this.username);
        this.commentsForm.appendChild(this.commentText);
        this.commentsForm.appendChild(this.commentAdder);
        this.rootElement.appendChild(this.commentsForm);

        this.commentsList = new CommentList(this.commentsForm);
        this.commentsList.render(this.commentsForm);
        // this.commentList = new CommentList(this.commentsForm);

        this.commentAdder.addEventListener('click', () => {
            this.commentsList.addComment(
                {
                    "username": this.username.value,
                    "comment": this.commentText.value,
                    "dateTime": Date(Date.now())
                }
            )
            //TODO clear form
        });


    }

}

