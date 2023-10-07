/*
Напишіть програму яка буде приймати два значення, перше це одиниця вимірювання (кілометри, години та кілограми), друге значення це кількість, а потім переводити ці значення:

Кілометри в метри
години в хвилини
Кілограми в грами
Зробити вивід отриманої інформації у вигляді - 10 км це 10000 м. 1 г це 60хв. 1 кг. це 1000 грм. 
*/


var unitOfMeasurement = 'г' //приклад
var countValue = '1' // приклад
var convertorValue
switch (unitOfMeasurement) {
    case 'км':
        convertorValue = countValue * 1000
        console.log(countValue, unitOfMeasurement, 'це', convertorValue, 'м.')    
        break;

    case 'г':
        convertorValue = countValue * 60
        console.log(countValue, unitOfMeasurement, 'це', convertorValue, 'хв.')    
        break;

    case 'кг':
        convertorValue = countValue * 1000
        console.log(countValue, unitOfMeasurement, 'це', convertorValue, 'грм.')    
        break;

    default:
        console.log('Невідома одиниця вимірювання')
        break;
}

