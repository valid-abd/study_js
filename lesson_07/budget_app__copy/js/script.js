
"use strict";
/*jshint esversion: 6 */

let button = document.querySelector('#start');
console.log(button);

let MaxButton = document.getElementsByTagName('button')[0];
let MaxButton2 = document.querySelectorAll('button')[1];
console.log('MaxButton: ', MaxButton, MaxButton2);

let checkbox = document.querySelectorAll('#deposit-check');
console.log('checkbox: ', checkbox);

let entryField = document.querySelectorAll('.additional_income-item');
console.log('entryField: ', entryField);

// let results = document.querySelectorAll('.result-total');
// console.log('results: ', results);

let BudgetMonthValue = document.querySelectorAll('.budget_month-value');
let BudgetDayValue = document.querySelectorAll('.budget_day-value');
let ExpensesMonthValue = document.querySelectorAll('.expenses_month-value');
let AdditionalIncomeValue = document.querySelectorAll('.additional_income-value');
let AdditionalExpensesValue = document.querySelectorAll('.additional_expenses-value');
let IncomePeriodValue = document.querySelectorAll('.income_period-value');
let TargetMonthValue = document.querySelectorAll('.target_month-value');


let SalaryAmount = document.querySelector('.salary-amount');
let IncomeTitle = document.querySelector('.income-title');
let IncomeAmount = document.querySelector('.income-amount');
let ExpensesTitle = document.querySelector('.expenses-title');
let ExpensesAmount = document.querySelector('.expenses-amount');
let DepositAmount = document.querySelector('.deposit-amount');
let DepositPercent = document.querySelector('.deposit-percent');
let TargetAmount = document.querySelector('.target-amount');
let PeriodSelect = document.querySelector('.period-select');
let AdditionalExpensesItem = document.querySelector('.additional_expenses-item');


