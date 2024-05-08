{
    // abstraction :   1. Interface 2. abstract 
    interface Vehicle1 {
       startEngine():void;
       stopEngine():void;
       move():void;
    }
    // const vehicle1 : Vehicle1 ={
    //     name: "toyota",
    //     model: 2022
    // } 
    class Car implements Vehicle1{
        startEngine(): void {
            console.log("I am starting the car engine");
        }
        stopEngine(): void {
            console.log("I am stopping the car");
        }
        move(): void {
            console.log("moving");
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();






    // abstract class or leader class

    abstract class Car2 {
       abstract startEngine(): void;
        abstract stopEngine(): void;
        move(): void {
            console.log("moving");
        }
    }

    class HondaCar extends Car2{
        startEngine(): void {
            console.log("start hondacar");
        }
        stopEngine(): void {
            console.log("Stop engine");
        }
    }

    const hondaCar = new HondaCar();
    hondaCar.startEngine()







    //
}