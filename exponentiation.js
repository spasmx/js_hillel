"use strict"

/*
Написати функцію pow(x,y) яка буде приймати 2 цисла, 
перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
*/


function pow(x, y) {
    let i = 0;
    let result = 1;
    while (i < y) { 
        result *= x;
        i ++;
    }
    return result;
}


console.log(pow(2, 4));
console.log(pow(9, 5));
console.log(pow(7, 4));
