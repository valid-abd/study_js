

"use strict";
/*jshint esversion: 6 */
let money = prompt('Ваш месячный доход?', 10000);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let period = 7;
let income = 'Фриланс';



// let questions1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
// let questions01 = prompt('Во сколько это обойдется?');
let questions2 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
// let questions02 = prompt('Во сколько это обойдется?');

let getExpensesMonth = function () { /// возвращает расходы за месяц
	prompt('Во сколько это обойдется?', 1500);
};
getExpensesMonth();

// let nbm = questions1 + questions01;
// console.log(nbm);
// let nbm2 = questions2 + questions02;
// console.log(nmb2);

let mission = 65250; // моя цель 
// let budgetMonth = money - questions2; // чистая прибыль

let getAccumulatedMonth = function (x, y) {
	let accumulatedMonth = x - y;
	console.log('чистая прибыль: ', accumulatedMonth);
};

let budgetMonth = getAccumulatedMonth(money, questions2);
let budgetDay = budgetMonth / 30; // бюджет на месяц 


// 4 урок -----------------------------

let showTypeOf = function (data) {
	console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getStatusIncome = function() {
	let cmd = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
		(budgetDay >= 300) ? ' Средний уровень дохода ' :
		(budgetDay >= 0) ? 'Низкий уровень дохода' :
		' Что то пошло не так ';
	console.log(cmd);
};
getStatusIncome();

let getTargetMonth = function(){
	console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(mission / budgetMonth));
};

getTargetMonth();

console.log('Мои обязательные ежемесячные расходы: ' + questions2);
// console.log('Мои обязательные ежемесячные расходы: ' + questions01);
// console.log('Мне обойдется в ' + questions2);
// console.log('Мне обойдется в ' + questions02);
// console.log('Доход за месяц с вычетам расхода : ' + budgetMonth);
// console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(mission / budgetMonth));
// console.log('Мой дневной бюджет : ' + Math.floor(budgetDay));






