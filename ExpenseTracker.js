export let expenses = [];

export function addExpense(description, amount, date) {
    try {
        if (!description || typeof amount !== "number" || amount <= 0 || !(date instanceof Date) || isNaN(date)) {
            throw new Error("Invalid expense! Make sure description is not empty, amount is a positive number, and date is valid.");
        }

        let expense = {
            description: description,
            amount: amount,
            date: date
        };

        expenses.push(expense);
        console.log("Expense added: " + description + " - $" + amount + " on " + date);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

export function getTotalExpenses() {
    let total = expenses.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);

    return total;
}

export function filterExpensesByDate(startDate, endDate) {
    let filtered = [];

    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].date >= startDate && expenses[i].date <= endDate) {
            filtered.push(expenses[i]);
        }
    }

    return filtered;
}

export function fetchExpenseReport() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (expenses.length > 0) {
                resolve("Expense Report: Total spent - $" + getTotalExpenses());
            } else {
                reject("No expenses found!");
            }
        }, 2000);
    });
}
