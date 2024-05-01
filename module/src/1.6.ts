function add(num1:number, num2:number):number{
    return num1 + num2;
};

const add2 = (num1:number, num2:number):number => num1+num2;
const poorUser =  {
    name:"habib",
    balance: 30,
    addBalance(balance:number):number{
        return this.balance + balance;
    }
}

const arr: number[] = [1,2,3,4];
const sqArray:number[] = arr.map((elem : number)=> elem*elem);