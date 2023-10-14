"use strict"

/*
Написати свою реалізацію функції isNaN.

Не викорисутовувати isNaN/ Number.isNaN
*/

function customIsNaNFunc(value){
    if (value / value === 1){
        return false;
    } else if (value === 0){
        return false;
    }   
    return true;
}

