{


    // interface 

    type User1 = {
        name: string,
        age: number
    }
    const user1 : User1 = {
        name:"habib",
        age:22,
    }
    
    type UserWithRole1 = User1 & {role: string}
    
    const userWithRole1 : UserWithRole1  = {
        name:"habib",
        age:22,
        role: 'student'
    }

    interface User2  {
        name: string,
        age: number
    }
    const user2 : User2 = {
        name:"habib",
        age:22,
    }

    interface UserWithRole2 extends User2{
        role: string
    }

    const userWithRole2 : UserWithRole2  = {
        name:"habib",
        age:22,
        role: 'student'
    }
}