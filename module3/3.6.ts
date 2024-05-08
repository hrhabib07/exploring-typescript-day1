{
    //getter setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance:number;
        constructor(id:number, name:string, _balance:number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        // public addMoney(amount:number){
        //     this._balance += amount;
        // }


        //getter
        get balance(){
            return this._balance;
        }

        // setter
        set deposit(amount: number){
           this._balance +=amount; 
        }

        // public getBalance(){
        //     return this._balance;
        // }
    }


    const goribManuserBankAccount = new BankAccount(11, "Mr. Gorib Manus", 300 );

    goribManuserBankAccount.deposit = 200;
    const myBalance = goribManuserBankAccount.balance;
    console.log(myBalance);


    // goribManuserBankAccount.balance = 21;
    // goribManuserBankAccount.addMoney(100); // function call korte hocchhe
    // const myBalance = goribManuserBankAccount.getBalance(); // function call korte hochhe

    // console.log(myBalance);
    









    //
}