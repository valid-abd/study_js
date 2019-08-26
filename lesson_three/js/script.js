let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let questions = prompt("Какие обязательные ежемесячные расходы у вас есть?", );
		questions2 = prompt('Во сколько это обойдется?');
		questions = prompt("Какие обязательные ежемесячные расходы у вас есть?", );
		questions2 = prompt('Во сколько это обойдется?');
let mission = 65250;  // моя цель 
let budgetMonth = money - questions;  // чистая прибыль

let budgetDay = budgetMonth / 30; // бюджет на месяц 


console.log('Мои обязательные ежемесячные расходы: ' + questions);
console.log('Мне обойдется в ' + questions2);
console.log('Доход за месяц с вычетам расхода : ' + budgetMonth);
console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(mission / budgetMonth));
console.log('Мой дневной бюджет : ' + Math.floor(budgetDay));

// if (budgetDay >=800) {
// 	console.log('Высокий уровень дохода');
// } else if (budgetDay >= 300 ){
// 	console.log('Средный зароботок');
// } else if (budgetDay >= 0) {
// 	console.log(' Бедняг ');
// }
// 	else {
// 	console.log('Что то пошло не так');
// }

let cmd = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
	(budgetDay >= 300) ? ' Средний уровень дохода ' :
	(budgetDay >= 0) ? 'Низкий уровень дохода' :

	' Что то пошло не так ';

	console.log(cmd );
