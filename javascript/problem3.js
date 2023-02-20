const personAccount = {
    firstName: "Naresh",
    lastName: "R",
    incomes: [],
    expenses: [],
    
    addIncome: function (description, amount) {
        this.incomes.push({ description: description, amount: amount });
    },
    
    addExpense: function (description, amount) {
        this.expenses.push({ description: description, amount: amount });
    },
    
    totalIncome: function () {
        let total = 0;
        for (let i = 0; i < this.incomes.length; i++) {
        total += this.incomes[i].amount;
      }
      return total;
    },
    
    totalExpense: function () {
        let total = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            total += this.expenses[i].amount;
        }
      return total;
    },
    
    accountInfo: function () {
        return `Name: ${this.firstName} ${this.lastName}, Income: ${this.totalIncome()}, Expense: ${this.totalExpense()}`;
    },
  
    accountBalance: function () {
      return this.totalIncome() - this.totalExpense();
    }
};
  
personAccount.addIncome("Salary", 6000);
personAccount.addIncome("Bonus", 2000);
personAccount.addExpense("Rent", 7000);
personAccount.addExpense("Groceries", 500);

console.log(personAccount.accountInfo()); 
console.log(personAccount.accountBalance()); 

