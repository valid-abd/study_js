	"use strict";
	/*jshint esversion: 6 */
	let money = prompt('Ваш месячный доход?', 10000);
	let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "аренда, питание");
	let deposit = confirm('Есть ли у вас депозит в банке?');
	let mission = 65250; // моя цель
	let period = 7;
	let income = 'Фриланс';



	let questions1 = prompt("Какие обязательные ежемесячные расходы у вас есть?", 'питание, жилье, дорога, интернет' );
	let questions01 = prompt("Какие обязательные ежемесячные расходы у вас есть?", 'питание, жилье ' );
	let questions2 = +prompt('Во сколько это обойдется?', 1500);
	let questions02 = +prompt('Во сколько это обойдется?', 2500);

	function getExpensesMonth() { /// возвращает расходы за МЕСЯЦ
		return questions2 + questions02;
	};

	console.log(' Расходы на протяжении месяца : ' + getExpensesMonth());

	let getAccumulatedMonth = function () {
		return  money - getExpensesMonth(); // чистая прибыль в месяц 
	};
	console.log(' чистая прибыль в месяц: ' + getAccumulatedMonth());

	let budgetDay = Math.ceil( getAccumulatedMonth() / 30); // чистая прибыль в день 
	console.log('чистая прибыль в день: ' + budgetDay );

	function getTargetMonth(mission, budget) {
		return 'Моя цель будет достигаться месяцев: ' + Math.ceil(mission / budget);
	};

// getTargetMonth(mission, getAccumulatedMonth());
console.log(getTargetMonth(mission, getAccumulatedMonth()));

	function getStatusIncome() {
		let cmd = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
			(budgetDay >= 300) ? ' Средний уровень дохода ' :
			(budgetDay >= 0) ? 'Низкий уровень дохода' :
			' Что то пошло не так ';
		console.log(cmd);
	};
	getStatusIncome();
	// за какой период будет достигнута цель
	// console.log('Моя цель будет достигаться месяцев: ', getTargetMonth());

		// let showTypeOf = function (data) {
		// 	console.log(data, typeof (data));
		// };

		// showTypeOf(money);
		// showTypeOf(income);
		// showTypeOf(deposit);
	
	console.log(questions1.toLowerCase().split(','));
	console.log(questions01.toLowerCase().split(','));
	console.log(addExpenses.toLowerCase().split(','));