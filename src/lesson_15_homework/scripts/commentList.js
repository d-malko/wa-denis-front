import {Comment} from "./comment";

export class CommentList {

    constructor(rootElement = document.querySelector('body')) {
        this.rootElement = rootElement;
        this.comments = [];
    }

    render() {
        if (document.getElementsByClassName('comment-box__list' ).length === 0) {
            this.commentsList = document.createElement('ul');
            this.commentsList.classList.add('comment-box__list');
            this.rootElement.appendChild(this.commentsList);
        }

        for (let i = 0; i < this.comments.length; i++) {
            this.comments[i].render();
        }
    }

    addComment(data) {
        document.getElementsByClassName('comment-box__list')[0].innerHTML = "";
        data.id = this.comments.length;
        const comment = new Comment(this.commentsList, data);
        this.comments.push(comment);
        this.render()

    }

    deleteComment(id) {
        data.id = this.comments.length;
        this.comments.splice(id);
        this.render();

    }


}

