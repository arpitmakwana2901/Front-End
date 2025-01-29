// class BankAccount {
//     constructor (accountNumber,balance){
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(amount){
//         if(amount>0){
//             this.balance += amount;
//             console.log(`Diposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
//         }else{
//             console.log("Deposit amount must be greater than zero.");
//         }
//     }

//     withdraw(amount){
//         if(amount>0 && amount <= this.balance){
//             this.balance -= amount;
//             console.log(`Withdraw ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`)
//         }else if(amount>this.balance){
//             console.log("Insufficient funds.")
//         }else{
//             console.log("Withdrawal amount must be greater than zero.")
//         }
//     }
// }

// const account1 = new BankAccount(100,500);
// const account2 = new BankAccount(200,400);

// account1.deposit(200);
// account1.withdraw(300);

// account2.deposit(100);
// account2.withdraw(500);



class BankAccount {
    constructor(accountNumber,balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    depoite(amount){
        if(amount>0){
            this.balance += amount ;
            console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance ${this.balance} `)
        }else{
            console.log("Amount must be grether than zero")
        }
    }

    withdraw(amount){
        if(amount>0){
            this.balance -= amount ;
            console.log(`Withdraw ${amount} into account ${this.accountNumber}. New balance ${this.balance}`)
        }else if(amount>this.balance){
            console.log("Insufficient funds.")
        }else{
            console.log("Withdrawal amount must be greater than zero.");
        }
    }
}

const account1 = new BankAccount(100,200);

account1.depoite(500)