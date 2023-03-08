// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userNum = +prompt('Угадай чмсло от 1 до 10');

// if (userNum === secretNumber){
//     alert('Вы угадали');
// }
//     else if (userNum !== secretNumber){
//         alert ('Попробуйте снова')
//     }


let secretNumber = Math.floor(Math.random() * 10) + 1;

let userNum = +prompt('Угадай число от 1 до 10');

if (userNum === secretNumber){
    alert('Вы угадали');
} else {
    alert('Попробуйте снова');
}