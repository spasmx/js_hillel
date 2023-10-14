"use strict"

/*
Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних
*/


function checkProbabilityTheory(count){
    if (count === 0){
        console.log("count must be a positive number")
    }
    else{
        let even_numbers_count = 0;
        let odd_numbers_count = 0;
        
        for(let i = 0; i < count; i++){
            let random_number = Math.round((Math.random() * 1000) + 100);
            if (random_number % 2 === 0){
                even_numbers_count += 1;
            }
            else {
                odd_numbers_count += 1;
            }
        }

        let percentage_of_even_to_count = even_numbers_count / count * 100 + "%";
        let percentage_of_odd_to_count = odd_numbers_count / count * 100 + "%";

        console.log("Кількість згенерованих чисел:\n",count);
        console.log("Парних чисел:\n",even_numbers_count);
        console.log("Непарних чисел:\n",odd_numbers_count);
        console.log("Відсоток парних до не парних:\n", percentage_of_even_to_count,"/",percentage_of_odd_to_count);
        }
    }  
    
