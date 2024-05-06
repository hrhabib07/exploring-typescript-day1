{
// mapped type in ts
type AreaNumber = {
    height: number;
    width: number;
} 
type height = AreaNumber['height'] // look up

type AreaString<T> = {
    [key in keyof T] : T[key];
}

const area1 : AreaString<{height: number, width: string, isGood: boolean}> = {height:100, width: '20', isGood:false};







}