function Wallet(ownerName,balance,currency){
    this.ownerName = ownerName;;
    this.balance = balance;
    this.currency = currency;

    this.addMoney = function(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`${amount} ${this.currency} added. New Balance: ${this.balance} ${this.currency}.`)
        }else
        {
            console.log("Amount must be > 0")
        }
    }

    this.show = function(){
        console.log(`Owner: ${this.ownerName}, Balance: ${this.balance} ${this.currency}`)
    }

}

const myWallet = new Wallet("arpit", 100, "USD");
myWallet.show();
myWallet.addMoney(100);
myWallet.show()