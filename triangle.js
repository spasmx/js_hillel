"use strict"


/*
Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу):
на першому рядку - одна зірочка, на другій дві, і так далі. 
Рішення оформіть у вигляді функції, куди передаються два параметри: висота трикутника та символ, яким його потрібно "малювати".

Домашню роботу необхідно зробити двома способами
*/

//ф-ція через цикл for
function triangle_for(height, symbol) {
    let result = '';
    for (let i = 0; i < height; i++) {
        result += symbol;
        console.log(result);
    }
}

triangle_for(5, "@");

//ф-ція через цикл do while
function triangle_do_while(height, symbol) {
    let result = '';
    let i = 0;

    do {
        i ++;
        result += symbol;
        console.log(result);
    } while (i < height);
}

triangle_do_while(2, '$')