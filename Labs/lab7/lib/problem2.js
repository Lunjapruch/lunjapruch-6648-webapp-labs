class BankAccount{
    constructor(owner, balance=0){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount){
        if(amount > this.balance){
            return null ;
        }
        else{
            this.balance -= amount;
            return this.balance;
        }
    }
    summary(){
        return `${this.owner}:${this.balance}`;
    }
    static bankname(){
        return "KKU Bank";
    }
}
class SavingsAccount extends BankAccount{
    constructor(owner, balance=0,rate=0.02){
        super(owner, balance);
        this.rate = rate;
    }
    addInterest(){
        this.balance = this.balance + (this.balance * this.rate);
        return this.balance;
    }
    summary(){
        return `${this.owner}:${this.balance} THB savings @ ${this.rate}`;
    }
}

savingAct = new SavingsAccount("Ann",1000);
console.log(savingAct.deposit(500));
console.log(savingAct.withdraw(2000));
console.log(savingAct.addInterest(0.03));
console.log(savingAct.summary());
console.log(`${BankAccount.bankname()} ${SavingsAccount.bankname()}`);