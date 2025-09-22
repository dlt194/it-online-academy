import { bankAccount } from "./bankAccount.js";

const account1 = new bankAccount(1, "John Doe", 1000);
const account2 = new bankAccount(2, "Jane Smith", 500);

console.log(
  `Initial Balances: ${account1.accountHolder} ${account1.getBalance(
    account1.accountNumber
  )} and ${account2.accountHolder} ${account2.getBalance(
    account2.accountNumber
  )}`
);

account1.deposit(200);
account2.withdraw(100);

console.log(
  `Balances after transactions: ${
    account1.accountHolder
  } ${account1.getBalance()} and ${
    account2.accountHolder
  } ${account2.getBalance()}`
);
