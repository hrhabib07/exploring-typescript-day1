{
    //access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance:number;
        constructor(id:number, name:string, _balance:number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addMoney(amount:number){
            this._balance += amount;
        }
        getBalance(){
            return this._balance;
        }
    }


    const goribManuserBankAccount = new BankAccount(11, "Mr. Gorib Manus", 300 );

    // goribManuserBankAccount.balance = 21;
    goribManuserBankAccount.addMoney(100);
    const myBalance = goribManuserBankAccount.getBalance();
    console.log(myBalance);
    









    //
}