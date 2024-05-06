{
    // oop inheritance
    class Parent {
        name: string; 
        age: number; 
        address: string;
        constructor(name:string, age:number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours:number){
            console.log(` ${this.name} will sleep for ${numberOfHours} hours daily`);
        }
    }



    class Student extends Parent {
       
        constructor(name:string, age:number, address: string){
            super(name, age, address)
        }
    } 


    const student1 = new Student ('Mr Student', 22, "uganda")
    student1;



    class Teacher extends Parent {
        designation: string;
        constructor(name:string, age:number, address: string, designation:string){
            super(name,age, address)
            this.designation = designation;
        }
        takeClass(numberOfClass:number){
            console.log(` ${this.name} will take  ${numberOfClass} classes daily`);

        }
    } 


    const teacher1 = new Teacher ('Mr Student', 40, "uganda", "English")
    student1;

    //
}