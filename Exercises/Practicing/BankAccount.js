function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function (value) {
  if (value > this.balance) {
    console.log(`Insufficient funds: ${this.balance}`);
    return;
  }

  this.balance -= value;
  this.seeBalance();
};

Account.prototype.deposit = function (value) {
  this.balance += value;
  this.seeBalance();
};

Account.prototype.seeBalance = function () {
  console.log(`Your balance is R$ ${this.balance.toFixed(2)}`);
};

function CheckingAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function (value) {
  if (value > this.balance + this.limit) {
    console.log(`Insufficient funds: ${this.balance}`);
    return;
  }

  this.balance -= value;
  this.seeBalance();
};

function SavingsAccount(agency, account, balance) {
  Account.call(this, agency, account, balance);
}
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.constructor = SavingsAccount;

const cc = new CheckingAccount(11, 6542, 0, 100);
cc.deposit(10);
cc.withdraw(110);
cc.withdraw(1);

console.log()

const sc = new SavingsAccount(12, 1223, 0);
sc.deposit(10);
sc.withdraw(10);
sc.withdraw(1);
