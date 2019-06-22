import {Comment} from "./comment";

export class CommentList {

    constructor(rootElement = document.querySelector('body')) {
        this.rootElement = rootElement;
        this.comments = [];
        document.comments = this.comments
    }

    render() {
        if (document.getElementsByClassName('comment-box__list').length === 0) {
            this.commentsList = document.createElement('ul');
            this.commentsList.classList.add('comment-box__list');
            this.rootElement.appendChild(this.commentsList);
        }

        for (let i = 0; i < this.comments.length; i++) {
            this.comments[i].render();
        }
        console.log('list-->>>' + this.comments.length);
    }

    deleteComment(id) {
        // data.id = this.comments.length;
        document.getElementsByClassName('comment-box__list')[0].innerHTML = "";
        this.comments = this.comments.filter( obj => {
            return obj.id !== id;
        });
        // this.commentsList.innerHTML="";
        this.comments.splice(id, 1);
        this.render();

    }

    addComment(data) {
        document.getElementsByClassName('comment-box__list')[0].innerHTML = "";
        const id = this.comments.length;
        data.id = id;
        const comment = new Comment(this.commentsList, data, () => {
            this.deleteComment(id)
        });
            // );


                // this.comments.splice(id, 1);
            // this.render();
            // console.log('ID' + id)
        // });
        this.comments.push(comment);
        this.render()

    }


}

