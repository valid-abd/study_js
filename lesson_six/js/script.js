
"use strict";
/*jshint esversion: 6 */
let money;

let start = function () {
	do {
		money = prompt('Ваш месячный доход?', 10000);
	}
	while (isNaN(money) || money === null || money.trim() === '');
};
start();

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
				let questions1 = prompt(' Введите обязательную статью расходов?', ' Коммуналка');
				let que;
			do {
				que = prompt(' Во сколько это обойдется?', 2500);
			}
			while (isNaN(que) || que === null || que.trim() === '');
			appData.expenses[questions1] = que;
		
		}
	},
	getExpensesMonth: function () {
		for (let key in appData.expenses){
			appData.expensesMonth += +appData.expenses[key];
		}
	},
	getBudget: function () {
	appData.budgetMonth= appData.budget - appData.expensesMonth;
	appData.budgetDay = Math.floor(appData.budgetMonth / 30); // 
	},

	getTargetMonth: function () {
		return appData.mission / appData.budgetMonth;
		// return appData.mission / appData.budgetMonth;
		},
	getStatusIncome: function () {
		let cmd = (appData.budgetDay >= 800) ? ' Высокий уровень дохода ' :
			(appData.budgetDay >= 300) ? ' Средний уровень дохода ' :
			(appData.budgetDay >= 0) ? 'Низкий уровень дохода' :
			' Что то пошло не так ';
		console.log(cmd);
	
	}
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log(' чистая прибыль: ' + appData.expensesMonth);
appData.getStatusIncome();
	if (appData.getTargetMonth() > 0) {
		console.log(' моя цель будет достигаться ' + Math.ceil(appData.getTargetMonth()) + ' месяц');
	} else {
		console.log(' цель не будет доcтигаться');
	}
	// console.log(' Расходы на протяжении месяца : ' + appData.getExpensesMonth());
	

for (let key in appData) {
	console.log(' Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
};
// appData.getExpensesMonth();
// appData.getBudget(money, exensesAmoun);
// let budgetMonth = appData.getBudget();

 // бюджет на месяц 

// console.log(questions1.toLowerCase().split(','));
// console.log(questions01.toLowerCase().split(','));
// appData.getStatusIncome();
//  appData.getStatusIncome();
// appData.getTargetMonth();










// console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(getTargetMonth()));

// за какой период будет достигнута цель 
// console.log('Моя цель будет достигаться месяцев: ', getTargetMonth());
// console.log();

