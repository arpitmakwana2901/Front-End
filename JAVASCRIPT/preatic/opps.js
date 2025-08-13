// function Vehicle(type, wheels, speed) {
//     this.type = type;
//     this.wheels = wheels;
//     this.speed = speed;
// }

// // Use a regular function to correctly access `this`
// Vehicle.prototype.describe = function() {
//     return `${this.type} ${this.wheels} ${this.speed}`;
// }

// let car = new Vehicle("car", 4, 20);
// console.log(car.describe()); // Output: "car 4 20"




// function BankAccount(accountNumber, balance, accountHolder) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//     this.accountHolder = accountHolder;
// }

// BankAccount.prototype.deposit = function(amount) {
//     if (amount <= 0) {
//         console.log("Deposit amount must be greater than zero.");
//         return;
//     }
//     this.balance += amount;
//     console.log("Deposited:", amount);
//     console.log("New Balance:", this.balance);
// };

// BankAccount.prototype.withdraw = function(amount) {
//     if (amount > this.balance) {
//         console.log("Insufficient funds! Withdrawal failed.");
//         return;
//     }
//     this.balance -= amount;
//     console.log("Withdrawn:", amount);
//     console.log("New Balance:", this.balance);
// };

// let account = new BankAccount("123456", 500, "Alice");

// account.withdraw(600); 
// account.deposit(200);  
// account.withdraw(100); 



function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.giveRaise = function(percentage) {
    this.salary += this.salary * (percentage / 100);
    console.log("New Salary:", this.salary);
};

// Example Usage
let employee = new Employee("John", "Developer", 50000);
employee.giveRaise(10);