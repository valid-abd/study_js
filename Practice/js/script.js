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
		percentDeposit: 0,
		moneyDeposit: 0,
		asking: function () {

			if (confirm(' Есть ли у вас дополнительны источник заработка?')) {
				let itemIncome;
				let cashIncome;
				do {
					itemIncome = prompt(' Какокй у вас дополнительный заработобок?', 'Таксую');
				}
				while (!isNaN(itemIncome) || itemIncome === null || itemIncome.trim() === '');
				do {
					cashIncome = prompt(' Сколько в месяц зарабатываете на этом? ', '10000');
				}
				while (isNaN(cashIncome) || cashIncome === null || cashIncome.trim() === '');
				appData.income[itemIncome] = cashIncome;
				appData.income[itemIncome] = itemIncome;
			}
			
			let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
			appData.addExpenses = addExpenses.toLowerCase().split(',').map(function (item) {
				return item.trim()});
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
			for (let i = 0; i < 2; i++) {
				let questions1;
				let que;
				do {
					questions1 = prompt(' Введите обязательную статью расходов?', ' Коммуналка');	
				}
				while (!isNaN(questions1) || questions1 === null || questions1.trim() === '');
				
				do {
					que = prompt(' Во сколько это обойдется?', 2500);
				}
				while (isNaN(que) || que === null || que.trim() === '');

				appData.expenses[questions1] = que;

			}
		},
		getExpensesMonth: function () {
			for (let key in appData.expenses) {
				appData.expensesMonth += +appData.expenses[key];
			}
		},
		getBudget: function () {
			appData.budgetMonth = appData.budget - appData.expensesMonth;
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
		},
		getInfoDeposit: function () {
			if (appData.deposit) {
				appData.percentDeposit;
				appData.moneyDeposit;
			}
			do {
				appData.moneyDeposit = prompt('Какая сумма заложена? ', 10000);
			}
			while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === null || appData.moneyDeposit.trim() === '');
			do {
					appData.percentDeposit = prompt(' Какой Годовой процент?', '10');
					
			}
			while (isNaN(appData.percentDeposit) || appData.percentDeposit === null || appData.percentDeposit.trim() === '');
		},

		calcSavedMoney: function () {
			return appData.budgetMonth * appData.period;
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



	for (let key in appData) {
		console.log(' Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
	}


	console.log(appData.addExpenses.map(function (item) {
			return item[0].toUpperCase() + item.slice(1);
		 }).join(', '));
		
	
// console.log(appData.addExpenses);