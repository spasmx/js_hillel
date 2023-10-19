"use strict"

/*
Створіть об'єкт з щонайменше трьома властивостями . 
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.
*/

let userData = {
    first_name: "Ivan",
    last_name: "Franko",
    age: 45,
    getInfo: function () {
        for (let i in userData){
            if (typeof userData[i] === "function"){
                continue;
            }
            console.log(i,':', userData[i]);    
        }
    }

};


userData.getInfo();
userData.newProperties = 'test';
userData.getInfo();