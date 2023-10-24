"use strict"

/*
Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. 
Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали. 
*/

function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myBlend(arr));
console.log(arr)