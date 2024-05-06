{
    // oop - class
    class Animal {
        // name: string;
        // species: string;
        // sound:string;

        // parameter properties

        constructor(public name:string, public species: string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }

        makeSound(){
            console.log(`The ${this.name} ${this.species}  says ${this.sound}`);
        }
    }


    const dog = new Animal("German shepard dog", "dog", "gew gew");
    const cat = new Animal("Persian", "cat", "mew mew");
    cat.makeSound();











  // ends 
}