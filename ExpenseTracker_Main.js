import { addExpense, getTotalExpenses, filterExpensesByDate, fetchExpenseReport } from "./ExpenseTracker.js";

addExpense("Lunch", 15.5, new Date("2024-02-01"));
addExpense("Groceries", 50, new Date("2024-02-02"));
addExpense("Internet Bill", 30, new Date("2024-02-03"));

console.log("Total Expenses: $" + getTotalExpenses());

let startDate = new Date("2024-02-01");
let endDate = new Date("2024-02-02");
console.log("Expenses from " + startDate + " to " + endDate + ":", filterExpensesByDate(startDate, endDate));

fetchExpenseReport()
    .then(function (report) {
        console.log(report);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
