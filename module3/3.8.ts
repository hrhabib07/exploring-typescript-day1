{
    // polymorphism
    class Person {
        getSleep(){
            console.log(`I am sleeping for 8 hours per day`);
        }
    }

    class Student extends Person {
        getSleep(): void {
            console.log(`I am sleeping for 7 hours per day`);
        }
    }

    class Developer extends Person {
        getSleep(): void {
            console.log(`I am sleeping for 6 hours per day`);
        }
    }

    const getSleepingHours  = (params: Person) =>{
        params.getSleep();
    }
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);





    class Shape {
        getShape(){
            return 0;
        }
    }

    class Circle extends Shape{
        radius: number;
        constructor(radius: number){
            super();
            this.radius = radius;
        }
        getShape(): number {
            return Math.PI * this.radius * this.radius;
        }   
    }

    const shape1 = new Circle(10);
    const getArea = (params: Shape) =>{
        console.log(params.getShape());
    }
    getArea(shape1)
    //
}