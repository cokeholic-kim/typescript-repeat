let a: any = 10;
let b: unknown = false;

let v1:boolean = a;
// let v2:boolean = b; // 알수없는타입은 할당할수없음

let anyv:any = b

//타입을 단언하면 unknown타입도 할당할수있다. as 키워드
// b는 넘버이다.
let v3:number = b as number 

type Result = {
    success:true,
    value:unknown
}|{
    success:false,
    error:Error
}
interface IUser {
    id:string,
    name:string
}

export default function getItem(user:IUser): Result {
    if(user.id){
        return{
            success:true,
            value: ['Apple','Banana']
        };
    }else{
        return{
            success:false,
            error:new Error('아이디가 없음')
        }
    }
}

// 타입단언(Assertion): 주저하지 않고 딱 잘라 말함
// 타입 스크립트가 타입 추론을 통해 판단할수 있는 타입의 범주를 넘는경우
// 더 이상 추론하지 않도록 지시하는것을 말함
// 1. 변수 as 타입
// 2. <타입>변수
function someFunc(someVal: string | number, isNumber: boolean){
    if(isNumber){
        // (someVal as Number).toFixed(2)
        (<number>someVal).toFixed(2)
    }
}

// Non-null 단언 연산자
// !를 사용하는 Non-null 단언 연산자 변수!
function fnA(x:number | null | undefined){
    if(x){
        return x.toFixed
    }
}
function fnB(x:number | null | undefined){
    return (x as number).toFixed
}
function fnC(x:number | null | undefined){
    return x!.toFixed(2)
}

document.querySelector(".menu-item")?.innerHTML; //있을수도없을수도.
document.querySelector(".menu-item")!.innerHTML; //무조건 있음.
(document.querySelector(".menu-item") as HTMLDivElement).innerHTML; //html의 div요소타입임
