import { Comment } from '../comment/comment';
import { NewCommentForm } from '../newCommentForm/newCommentForm';
import { ApiRequest } from '../../utils/apiRequest';
import { Footer} from "../footer/footer";

import './commentBox.scss';

export class CommentBox {
    constructor(target = document.querySelector('body')) {
        this.target = target;
        this.comments = [];
        this.apiRequest = new ApiRequest('https://evening-dawn-11092.herokuapp.com');
        this.addComment = this.addComment.bind(this);
        this.fetchComments();
    }

    deleteComment(id) {
        console.log('I\'m in COMMENT LIST!! My id is ', id);
        this.apiRequest.delete(`/comments/${id}`, () => {
            console.log(this);
            this.comments = this.comments.filter((comment) =>  comment.id !== id);
            this.renderList();
        }, () => {
            alert(e);
        });
    }
    /**
     * @param {Object} requestData
     * @param {string} requestData.author
     * @param {string} requestData.text
     */
    addComment(requestData) {
        this.apiRequest.post(`/comments`, requestData, (response) => {
            const comment = JSON.parse(response);
            this.comments.push(comment);
            this.renderList();
        }, () => {
            alert(e);
        });
    }

    render() {
        this.todoApp = document.createElement('section');
        this.todoApp.classList.add('todoapp');
        this.main = document.createElement('section');
        this.main.classList.add('main');
        this.form = new NewCommentForm(this.addComment, this.todoApp);
        this.ul = document.createElement('ul');
        this.ul.classList.add('todo-list');
        this.renderList();
        this.main.appendChild(this.ul);

        this.todoApp.appendChild(this.main);
        // this.todoApp.appendChild(this.footer);
        this.target.appendChild(this.todoApp);
        this.footer = new Footer(this.todoApp);
        const bottomFooter = document.createElement('footer');
        bottomFooter.classList.add('info');
        const p1 = document.createElement('p');
        p1.textContent = "Double-click to edit a todo";
        const p2 = document.createElement('p');
        p2.innerHTML = "Written by <a href=\"https://github.com/addyosmani\">Addy Osmani</a>";
        const p3 = document.createElement('p');
        p3.innerHTML = "Part of <a href=\"http://todomvc.com\">TodoMVC</a>";

        this.target.appendChild(bottomFooter);
        bottomFooter.appendChild(p1);
        bottomFooter.appendChild(p2);
        bottomFooter.appendChild(p3);
    }

    renderList() {
        this.ul.innerHTML = '';
        for (const comment of this.comments) {
            const el = new Comment(comment, (id) => {
                this.deleteComment(id)
            }, this.ul);

            el.render();
        }
    }

    fetchComments() {
        const successCallback = (response) => {
            this.comments = JSON.parse(response);
            this.render();
        };

        const errorCallback = (error) => {
            alert('Oops!, Something went wrong, we are working on fix!')
        };

        this.apiRequest.get('/comments', successCallback, errorCallback);
    }
}