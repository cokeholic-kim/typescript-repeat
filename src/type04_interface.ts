//인터페이스는 타입스크립트 여러 객체를 정의하는 
//일종의 규칙이며 구조이다.
//interface 키워드를 사용

// ? 옵셔널 속성 지정
// readonly 읽기전용속성
interface IUser3 {
    name: string;
    age:number;
    isAdult?:boolean; //있어도되고 없어도됨
}

let obj:Readonly<IUser3> = {
    name:"G",
    age:32,
    isAdult:true
}

let obj2:IUser3 = {
    name:"G",
    age:32,
}as const;

obj2.name = "K"
console.log(obj2.name)
// obj.name = "K";
// obj.age = 32  readonly는 값을 읽을수는있으나 변경은 불가능함