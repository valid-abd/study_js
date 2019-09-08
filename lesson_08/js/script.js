
"use strict";
/*jshint esversion: 6 */


let startButton = document.querySelector('#start');

let MaxButton = document.getElementsByTagName('button')[0];
let MaxButton2 = document.querySelectorAll('button')[1];

let checkbox = document.querySelector('#deposit-check');
// console.log('checkbox: ', checkbox);

let entryField = document.querySelectorAll('.additional_income-item');


let results = document.querySelectorAll('.result-total');
console.log('results: ', results);
let expensesPlus = document.querySelector('.expenses_add');
let Myinpu01 = document.querySelector('.salary-amount');
let Myinpu02 = document.querySelector('input[class=income-title]');
let Myinpu03 = document.querySelector('.income-amount');
let Myinpu04 = document.querySelector('input[class=expenses-title]');
let expensesItem = document.querySelectorAll('.expenses-items');
let Myinpu06 = document.querySelector('.deposit-amount');
let Myinpu07 = document.querySelector('.deposit-percent');
let Myinpu08 = document.querySelector('.target-amount');
let Myinpu09 = document.querySelector('.period-select');
// console.log('Myinpu09: ', Myinpu09);
let Myinpu10 = document.querySelector('.additional_expenses-item');
let incomeItems = document.querySelectorAll('.income-items');




let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	percentDeposit: 0,
	moneyDeposit: 0,
	deposit: false,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	incomeMonth: 0,
	start: function () {
		if (Myinpu01.value ==='') {
			alert('ошибка, поле " Месячный доход" должно быть заполнено!');
		}

		appData.budget = +Myinpu01.value;
		appData.getExpenses();
		appData.getIncome();

		appData.getExpensesMonth();
		// appData.showResult();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getBudget();

		appData.showResult();


	},

	showResult: function(){
		results[0].value = appData.budgetMonth;
		results[1].value = appData.budgetDay;
		results[2].value = appData.expensesMonth;
		results[4].value = appData.addExpenses.join(', ');
		results[3].value = appData.addIncome.join(', ');
		results[6].value = Math.ceil(appData.getTargetMonth());
		results[5].value = appData.calcPeriod();


	},

	addExpensesBlock: function(){
		let cloneExpensesItem = expensesItem[0].cloneNode(true);
		expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItem = document.querySelectorAll('.expenses-items');
		if (expensesItem.length === 3) {
			expensesPlus.style.display= 'none';
		}
	},

	getExpenses: function (){
		expensesItem.forEach(function(item){
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !=='') {
				appData.expenses[itemExpenses] = cashExpenses;				
			}
		});
	},

	getIncome: function(){
			if (confirm('Есть ли у вас дополнительный источник заработка?')) {
				let itemIncome = prompt(' Какой?', "Таксую");
				let cashIncome = prompt('Сколько в месяц зарабатываешь на этом?', 10000);
				appData.income[itemIncome] = cashIncome
			}
			for(let key in appData.income){
				appData.incomeMonth += +appData.income[key];
			}
	},

	getAddExpenses: function(){
		let addExpenses = Myinpu10.value.split(',');
		addExpenses.forEach(function(item){
			item = item.trim();
			if(item !== ''){
				appData.addExpenses.push(item);
			}
		});
	},

	getAddIncome: function(){
		entryField.forEach(function(item){
			let itemValue = item.value.trim();
			if (itemValue !== ''){
				appData.addIncome.push(itemValue);
			}
		});
	},

	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
	},

	getBudget: function () {
		appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30); // 
	},

	getTargetMonth: function () {
		return Myinpu08.value / appData.budgetMonth;
		// return appData.mission / appData.budgetMonth;
	},
	getStatusIncome: function () {
		let cmd = (appData.budgetDay >= 800) ? ' Высокий уровень дохода ' :
			(appData.budgetDay >= 300) ? ' Средний уровень дохода ' :
			(appData.budgetDay >= 0) ? 'Низкий уровень дохода' :
			' Что то пошло не так ';
		console.log(cmd);
	},
	calcPeriod: function(){
		return appData.budgetMonth * Myinpu09.value;
	},
};

// calcPeriod
console.log('calcPeriod: ', appData.calcPeriod());
startButton.addEventListener('click', appData.start);

MaxButton2.addEventListener('click', appData.addExpensesBlock);




