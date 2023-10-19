"use strict"

/*
Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {

	"стрижка": "60 грн",

	"гоління": "80 грн",

	"Миття голови": "100 грн"

};

"Послуги" можуть додаватися по ходу роботи:

services['Розбити скло'] = "200 грн";

створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
*/

let services = {
	haircut : "60 грн",
	shave : "80 грн",
	washingTheHead : "100 грн",
    //метод який створить новий об'єкт без методів, для подальшої роботи з ним
    objectWithoutFunc: function(){
        let newServices = {};
        for (let i in services){
            if (typeof services[i] === "function"){
                continue;
            }
            newServices[i] = parseInt(services[i]);
        } 
        return newServices;
        
    }, 
    price : function(){
        let newServices = this.objectWithoutFunc();
        let price = 0;
        for (let i in newServices){
            price += newServices[i];
        }
        return price;
    },
    minPrice: function(){
        let newServices = this.objectWithoutFunc();
        let min = 0;
        for (let i in newServices){
            min = newServices[i];
        }
        for (let i in newServices){
            if (min >= newServices[i]){
                min = newServices[i];
            }
        }
        return min;
    },
        
    maxPrice: function(){
        let newServices = this.objectWithoutFunc();
        let max = 0;
        for (let i in newServices){
            max = newServices[i];
        }
        for (let i in newServices){
            if (max <= newServices[i]){
                max = newServices[i];
            }
        }
        return max;
    }

};