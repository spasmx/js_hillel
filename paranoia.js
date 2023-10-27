"use strict"

/*
В нас є масив обєктів в яких міститься email.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/

function paranoia(arr){
    const re = /^([a-z0-9]+\.{1})?[a-z0-9]+\@(gmail|yahoo)\.com$/;
    let trusted_address = [];
    for (let i = 0; i < arr.length; i++) {
        if (re.test(arr[i].email)) {
            trusted_address.push(arr[i].email);
        }
    }
    return trusted_address;
}
