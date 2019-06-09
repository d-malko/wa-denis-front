import './lesson_13_home.css';
import './styles/accordion.scss'
import './styles/page.scss'
import './styles/sidebar.scss'
import './styles/main.scss'
import {accordion} from "./scripts/acordion";




const sidebarObject = [{
    title: 'Section 1',
    content: 'fdsjklfkl sdjflsdj lsdjflsdj'
},
    {
        title: 'Section 2',
        content: 'fdjfj jflskjdf jk'
    },
    {
        title: 'Section 3',
        content: 'fdjfj fd jk'
    }];

const mainObject = [{
    title: 'инициализация',
    content: 'Выражение (в том числе выражения присвоения) или определение переменных. Обычно используется, чтобы инициализировать счётчик. Это выражение может опционально объявлять новые переменные с помощью ключевого слова var. Эти переменные видимы не только в цикле, т.е. в той же области области видимости, что и цикл for. Результат этого выражения отбрасывается.'
},
    {
        title: 'условие',
        content: 'Выражение, выполняющееся на каждой интерации цикла. Если выражение истинно, цикл выполняется. Условие не является обязательным. Если его нет, условие всегда считается истиной. Если выражение ложно, выполнение переходит к первому выражению, следующему за for.'
    },
    {
        title: 'финальное выражение',
        content: 'Выражение, выполняющееся в конце интерации цикла. Происходит до следующего выполнения условия. Обычно используется для обновления или увеличения переменной счётчика.'
    },
    {
        title: 'выражение',
        content: 'Выражение, которое выполняется, когда условие цикла истинно. Чтоб выполнить множество выражений в цикле, используйте блок ({ ... }) для группировки этих выражений. Чтобы не выполнять никакого выражения в цикле, используйте пустое выражение (;).'
    }
];

accordion('.sidebar', sidebarObject);
accordion('.main', mainObject);