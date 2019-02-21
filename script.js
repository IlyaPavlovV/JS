'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expens = prompt("Введите обязательную статью расходов в этом месяце");
let expensAmount = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expens: expensAmount
    },
    optionalExpenses: null,
    income: null,
    savings: false
};

let calculate = (appData.budget - appData.expenses.expens) / 30;
alert("Ваш бюджет на один день: " + calculate);