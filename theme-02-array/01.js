// инициализация массива

let arr; // декларация переменной
arr = []; // инициализация пустого массива
let numbers = [2, 3, 5, 10, 8]; // массив с элементами
console.log(numbers);


// генерация массива
let amount = 5;

console.log(
    [...Array(amount).keys()]
);

console.log(
    [...Array(amount).keys()].map(i => i+1)
);
