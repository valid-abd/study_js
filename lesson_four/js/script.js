"use strict";
/*jshint esversion: 6 */
let money = prompt('Ваш месячный доход?', 10000);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
let deposit = confirm('Есть ли у вас депозит в банке?');

let period = 7;
let income = 'Фриланс';

console.log('мои расходы :' + addExpenses);



let questions2 = prompt("Какие обязательные ежемесячные расходы у вас есть?");

function getExpensesMonth() { /// возвращает расходы за месяц
	return prompt('Во сколько это обойдется?', 1500);
}
let questions01 = getExpensesMonth();


let mission = 65250; // моя цель 
// let budgetMonth = money - questions2; // чистая прибыль

function getAccumulatedMonth(x, y) {
	let accumulatedMonth = x - y;
	console.log('чистая прибыль: ', accumulatedMonth);
}

let budgetMonth = getAccumulatedMonth(money, questions01);
console.trace(budgetMonth);
let budgetDay = budgetMonth / 30; // бюджет на месяц 

let showTypeOf = function (data) {
	console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getStatusIncome() {
	let cmd = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
		(budgetDay >= 300) ? ' Средний уровень дохода ' :
		(budgetDay >= 0) ? 'Низкий уровень дохода' :
		' Что то пошло не так ';
	console.log(cmd);
}
getStatusIncome();

function getTargetMonth() {
	console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(mission / budgetDay));
};

getTargetMonth(); // за какой период будет достигнута цель 

console.log('Мои обязательные ежемесячные расходы: ' + questions2);
