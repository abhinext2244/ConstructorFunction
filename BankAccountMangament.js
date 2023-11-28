
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; 
}

BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
        console.log('Invalid deposit amount.');
    }
};

BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
        console.log('Invalid withdrawal amount or insufficient funds.');
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};


function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

// Example usage:
const account1 = new BankAccount('789754397', 'abhishek', 'Savings', 3000.00);
const account2 = new BankAccount('9084375943', 'Golu', 'Checking', 2000.00);

account1.deposit(200);
account1.withdraw(500);
account1.checkBalance();

account2.deposit(400);
account2.withdraw(300);
account2.checkBalance();

console.log(`Account 1 active: ${account1.isActive()}`);
console.log(`Account 2 active: ${account2.isActive()}`);

const allAccounts = [account1, account2];
const totalBalance = getTotalBalance(allAccounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);
