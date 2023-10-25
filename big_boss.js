"use strict"

/*
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. 
Окрім того, наша компанія продає рішення для організації продажу цих квитків. 
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків. 
Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, 
і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі

const company = {
  name: 'Велика Компанія',
  type:'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};

Вам необхідно написати функцію findValueByKey(companyName), 
яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.

*/


function findValueByKey(obj, companyName) {
  if (obj.name === companyName) {
    return obj;
  } else {
    for (let i in obj) {
      if (Array.isArray(obj[i])) {
        for (let j = 0; j < obj[i].length; j++) {
          if (typeof obj[i][j] === "object") {
            const array_in_object = findValueByKey(obj[i][j], companyName);
            if (array_in_object != undefined) {
              return array_in_object;
            }
          }
        }
      }
    }
  }
  return null;
}