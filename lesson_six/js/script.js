// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

"use strict";
/*jshint esversion: 6 */
let money;
// let mission = 65250; // моя цель 
// let period = 5;
let income = 'Фриланс';

let start = function () {
	do {
		money = prompt('Ваш месячный доход?', 10000);
	} while (isNaN(money) || !money.trim());
};
start();
let questions1;
let questions01;
let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	mission: 50000,
	period: 3,
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	asking: function () {
		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
		appData.addExpenses = addExpenses.toLowerCase().split(',');
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				let questions1 = prompt(' Введите обязательную статью расходов?', ' Коммуналка');
				let questions01 = prompt(' Введите обязательную статью расходов?', ' дорога');
				let que;
			}
			do {
				que = prompt(' Во сколько это обойдется?', 2500);
			}
			while (isNaN(que) || !que.trim());
			// sum += +que;
			appData.expenses[questions1] = que;
			appData.expenses[questions01] = que;
		}
	},

	getExpensesMonth: function () {
	for (let key in appData.expenses){
		appData.expensesMonth += +appData.expenses[key];
	}
		
	},
	getAccumulatedMonth: function () {
		return money - exensesAmoun;
	},
	getTargetMonth: function () {
		let myIncome = Math.ceil(appData.mission / appData.getAccumulatedMonth());
	
		// let myIncome =  0;
		if (myIncome > 0) {
			console.log(' моя цель будет достигаться ' + myIncome + ' месяц');
		} else {
			console.log(' цель не будет доcтигаться');
		}

	},
	getStatusIncome: function () {
		let cmd = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
			(budgetDay >= 300) ? ' Средний уровень дохода ' :
			(budgetDay >= 0) ? 'Низкий уровень дохода' :
			' Что то пошло не так ';
		console.log(cmd);
	},

};
let exensesAmoun = appData.getExpensesMonth();
let budgetMonth = appData.getAccumulatedMonth(money, exensesAmoun);
console.log(' чистая прибыль: ' + appData.getAccumulatedMonth());
console.log(' Расходы на протяжении месяца : ' + exensesAmoun);
let budgetDay = appData.getAccumulatedMonth() / 30; // бюджет на месяц 

// console.log(questions1.toLowerCase().split(','));
// console.log(questions01.toLowerCase().split(','));
appData.getStatusIncome();
appData.getTargetMonth();









// console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(getTargetMonth()));

// за какой период будет достигнута цель 
// console.log('Моя цель будет достигаться месяцев: ', getTargetMonth());
// console.log();

