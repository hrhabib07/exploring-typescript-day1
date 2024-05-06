{
    // utility types 
    // pick 
    type Person ={
        name: string;
        age: number;
        email?: string;
        contact: string;
    }

    // pick
    type NameAge = Pick<Person, "name" | "age">;


    // omit
    type ContactInfo = Omit< Person, "name" | "age">

    //require 
    type PersonRequired = Required<Person>

    // partial
    type PersonPartial = Partial<Person>
    // readOnly
    type PersonReadOnly = Readonly<Person>
    const person1: PersonReadOnly = {
        name: "MR X",
        age:21,
        contact:"017"
    } 
    // person1.name = "Mr Z"


    // record
    // type myObj = {
    //     a: string,
    //     b:string
    // };

    type myObj = Record<string, string>
    const emptyObj : Record<string, unknown> = {}
    const obj1: myObj = {
        a: 'aa',
        b: "bb",
        c: 'cc,',
        d:'dd'
    }
    


    
}