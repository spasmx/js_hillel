"use strict"

/*
Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true, 6), 
яка приймає чотири аргументи:

-рядок, до якого буде додаватися символ.
-символ, який буде додаватися.
-Скільки додавати символів
-булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
-Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, 
а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

function pad(string, symbol_for_add, place_for_add, result_length_string){
    let result_string = string;
    let index_counter = 0;
    if (place_for_add){
        let string_for_add_to_start = '';
        for (let i = 0; i < (result_length_string - string.length); i++){
            string_for_add_to_start += symbol_for_add.charAt(index_counter);
            index_counter ++;
            if (index_counter === symbol_for_add.length){
                index_counter = 0;
                }
        }
        result_string = string_for_add_to_start + string;
        }
    else {
        for (let i = string.length; i < result_length_string; i++){
            result_string += symbol_for_add.charAt(index_counter); // додаємо до рядку другий рядок посимвольно
            index_counter ++;
            if (index_counter === symbol_for_add.length){ // якщо з другого рядку довався останній індекс, скидуємо лічильник індексу до 0
                index_counter = 0;
                }
            }
        } 
    return result_string;
    }
   
