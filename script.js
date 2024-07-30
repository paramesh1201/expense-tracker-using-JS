// Get the form and the list elements
var form = document.getElementById('expenseform');
var list = document.getElementById('expenses');
let expenses = [];

function addExpense(event) {
    event.preventDefault();
    var date = document.getElementById('date').value;
    var category = document.getElementById('category').value;
    var amount = parseFloat(document.getElementById('amount').value);
    
    if (date && category && amount) {
        const expense = {
            date,
            category,
            amount
        };
        expenses.push(expense);
        displayExpenses();
        form.reset(); // Reset the form
    }
}

function displayExpenses() {
    list.innerHTML = '';
    let total = 0;

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.date} - ${expense.category} - $${expense.amount.toFixed(2)}`;
        list.appendChild(listItem);
        total += expense.amount;
    });

    // Display the total expense
    var totalElement = document.createElement('li');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}