//구문
interface AddNum  {
    (num1:number,num2:number):void
}


interface User2{
    name:string
}
let green:User2 = {
    name:"green"
}

function printUserName(this:User2){
    console.log(this.name)
}
function printUserName2(this:User2,age:number){
    console.log(this.name)
}

interface PrintN{
    ():void
}
const myFun6 = printUserName.bind(green)
myFun6()
