{
    // Type guard
    type AlphaNeumeric = number | string;
    const add = (params1: AlphaNeumeric, params2: AlphaNeumeric): AlphaNeumeric =>{
        if(typeof params1==="number" && typeof params2==="number"){
            return params1 + params2;
        }else{
           return params1.toString() + params2.toString(); 
        }
    }

    const result1 = add(2,3);
    console.log(result1);




    // in guard
    type NormalUser = {
        name : string;
    }
    type AdminUser = {
        name: string;
        role: "admin"
    }
    const getUser = (user:NormalUser | AdminUser) =>{
        if("role" in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}.`);
        }
    };


    // const normalUser:NormalUser = getUser({name: "Mr. X"});
    // const adminUser : AdminUser = getUser({name:"Mr. Y", role:'admin'}); 


// console.log(normalUser, adminUser);



// end
}