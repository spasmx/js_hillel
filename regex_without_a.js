"use strict"


/*
Напишіть регулярний вираз,який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
*/

function symbolsWithoutALetters(str){
    const re = /[^AaАа]{6,}/;
    if (re.test(str)){
        return str.match(re)[0];
    }
    return null;    
}


