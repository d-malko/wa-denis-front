import './lesson_11_home.scss';
// if (!$('element').hasClass('do-not-want')) {
//     // This element does not have the .do-not-want class
// }


function switcher(block) {
    // const light
    const btns = block.querySelectorAll('.light');
    let currentActive = block.querySelector('.active');

   function disableOthers() {
       if (currentActive) {
           currentActive.classList.remove('active');
       }
    }

    btns.forEach(function (btn) {
        btn.onclick = function() {
            changeColor(btn);
        };
    });

    function changeColor(btn) {
        disableOthers();

        btn.classList.add('active');
        currentActive = btn;
    }
}

function street(block) {

    const trafficLights = block.querySelectorAll('.trafficlight');
    trafficLights.forEach(function(element){

        switcher(element);
    });
}
street(document.querySelector('.street'));




// function duplicateCount(text){
//     let obj = {};
//
//     for (const i in text) {
//         let char = text[i];
//         console.log(char);
//         if (obj[char]) {
//             obj[char]++;
//         } else {
//             obj[char] = 1;
//         }
//     }
//     Object.keys(obj).forEach(function (e) {
//         if (obj[e] > 1){
//          console.log({e})
//     }
//     })
//
//     // return Object.keys(resultObj).length;
//     // return resultObj;
// }
//
// console.log(duplicateCount('hello'))