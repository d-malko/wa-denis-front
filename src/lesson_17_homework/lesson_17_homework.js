import './lesson_17_homework.scss';
import { CommentBox } from './components/commentBox/commentBox';
import { ApiRequest } from './utils/apiRequest';

const request = new ApiRequest('https://evening-dawn-11092.herokuapp.com');
request.get(
    '/list',
    (resp) => {
        console.log(resp);
    });
const list1 = new CommentBox();

console.log(list1);