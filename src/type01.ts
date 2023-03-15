//타입지정
//일반변수, 매개변수 , 객체속성등에 : type과 같은 형태로 타입을지정

//일반 변수 타입지정
let number: number = 10
let str:string = "abc";
let boolean1:boolean = true

//함수타입지정
function add(num1:number,num2:number){
    return num1 + num2
}

const sum = add(1,2)
const sum2 = add(1,3)

// 배열 타입지정
let arr1 : string[] = []
let arr2 : Array<string> = []
let arr3:(number|string)[] = []  //유니언 타입
let arr4:any []= [] //배열항목의 타입을 단언할수없을때 any를 사용
// interface나 커스텀타입을 사용한 배열
interface User{
    name: string;
    age:number;
}
let arr5:User[] =[]
// arr5 = [{name:"A",age:54} , {name:"B",age:32}]
arr1= ["aa","bb"]

// arr2 = [""]
arr3 = ["2","3",4,5]
arr4 = [1,true,"dd"]
// 읽기전용 배열
let arrA:readonly number[]=[1,2,3,4,5,6]
// let arrC:readonly Array<number>=[1,2,3,4,5,6]
let arrB:number [] = [1,2,3,4,5,6]
arrA[0] //readonly 수정 불가
arrB[0] = 10

//타입추론
//타입스크립트는 타입표기가 없는 경우 코드를 읽고 분석하여 타입을 유추할수있음