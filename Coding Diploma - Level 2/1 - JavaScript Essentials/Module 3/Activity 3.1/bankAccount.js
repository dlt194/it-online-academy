class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`$${amount} withdrawn. Current balance: $${this.balance}`);
    }
  }

  checkBalance() {
    console.log(`Account balance for ${this.accountHolder}: $${this.balance}`);
  }
}

export default BankAccount;
