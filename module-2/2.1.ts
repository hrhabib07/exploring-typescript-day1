{

// type assertion 
const kgToGm = (value:number|string) =>{
    if(typeof value==="string"){
        const convertedValue = parseFloat(value)*1000;
        return `the converted value is : ${convertedValue}`
    }
    else if(typeof value==="number"){
        return value*1000;
    }
}

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("100") as string;


type CustomError = {
    message: "this is an error"
}
try{

} catch(error){
    console.log((error as CustomError).message);
}

    
}