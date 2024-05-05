{
    // generic constrain with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship"; // manually 
    type Owner2 = keyof Vehicle; //this refer the same thing of previous line 
    const person1 : Owner2 = "car";


    const getPropertyValue = <X,Y extends keyof X> (obj: X, key: Y) =>{
        return obj[key];
    }

    const user1 = {
        name: 'Habib',
        age: 21,
        address: "syl"
    }

    getPropertyValue(user1, "name")

}