let money = 29540;
let income = 'Фриланс';
let addExpenses = "Аренда, дорога, развлечение, питание";
let deposit = true; 
let mission = 65250;
let period = 7;

let budgetDay = money/30;
let	budgetDay2 = money%30;

console.log(money, income, deposit);
console.log(income.length);
console.log("Период " + period + " месяцев");
console.log(addExpenses.toLowerCase().split(' '));
console.log("результат: "+	budgetDay);
console.log("остаток от деления: " + budgetDay2);



