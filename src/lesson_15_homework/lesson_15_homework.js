import './lesson_15_homework.scss';
import {CommentForm} from "./scripts/commentForm";

let comments = document.getElementsByClassName('.comment-box');
let commentForm = new CommentForm();
commentForm.render();