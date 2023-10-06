/*
Необхідно написати програму яка буде виводити інформацію за умовами при яких число 
виводитиметься з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".

1. Рік отримувати через prompt()
2. Зробити перевірку що користувачь ввів число та це число не є відємним

*/


const input = prompt('Скільки тобі років?');

//Валідація на число
if (isNaN(input)){
    console.log('Введіть число');
}
//Валідація на позитивне число 
else { 
    if (input < 1){ 
        console.log('Число має бути позитивним та більше 0');
    }
    else {
        // умови виводу в консоль при проходженні валідації

        let remainderFromDivisionByTen = input % 10
        let remainderFromDivisionByHundred = input % 100
        
        //перевірка на числа більше 100, в яких останні числа від 11 до 19
        if (remainderFromDivisionByHundred >= 11 && remainderFromDivisionByHundred <= 19){ 
            console.log(input + " років");
        }
        // перевірка на десяткові числа від 11 до 19
        else if (input >= 11 && input <= 19){ 
            console.log(input + " років");
        }
        else if (remainderFromDivisionByTen === 0 || remainderFromDivisionByTen >= 5 && remainderFromDivisionByTen <= 9){
            console.log(input + " років");
        }
        else if (remainderFromDivisionByTen >= 2 && remainderFromDivisionByTen <= 4) {
            console.log(input + " роки");
        }
        else {
            console.log(input + " рік");
        }
    }
}
