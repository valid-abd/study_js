	"use strict";
	/*jshint esversion: 6 */
	let money = prompt('Ваш месячный доход?', 10000);
	let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
	let deposit = confirm('Есть ли у вас депозит в банке?');
	let mission = 65250; // моя цель
	let period = 7;
	let income = 'Фриланс';

	console.log('мои расходы :' + addExpenses.toLowerCase().split(','));

	let questions1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
	let questions2 = prompt('Во сколько это обойдется?', 1500);

	function getExpensesMonth() { /// возвращает расходы за месяц
		return questions2;
	};

	console.log(' Расходы на протяжении месяца : ' + getExpensesMonth());

	let getAccumulatedMonth = function () {
		return money - getExpensesMonth();
	};

	let budgetMonth = getAccumulatedMonth(money, getExpensesMonth());
	console.log(' чистая прибыль: ' + getAccumulatedMonth());

	console.log(budgetMonth);
	let budgetDay = getAccumulatedMonth() / 30; // бюджет на месяц

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
	};
	getStatusIncome();

	function getTargetMonth() {
		return mission / getAccumulatedMonth();
	};
	console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(getTargetMonth()));

	// за какой период будет достигнута цель
	// console.log('Моя цель будет достигаться месяцев: ', getTargetMonth());

	console.log('Мои обязательные ежемесячные расходы: ' + questions1.toLowerCase().split(','));
