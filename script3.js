// let userNum = +prompt('Введите числа через затятую')
// .split(',')
// .map(Number);

// alert(userNum
//     .reduce((sum, next) => sum + next, 0)
//     / userNum.length);
   


//     let userNum = +prompt('Введите числа через затятую')
// .split(',')
// .map(Number);

// alert(userNum
//     .reduce(function(sum, next) {
//         return sum + next;
//     }, 0)
//     / userNum.length);

// let str = '5,3,4';
let sum = 0;
let length = 0;

let userNum = prompt('Введите числа через затятую')

for (let i = 0; i < userNum.length; i++) {
  if (!isNaN(userNum[i])) {
    sum += +userNum[i];
    length++;
  }
}

alert(sum / length);