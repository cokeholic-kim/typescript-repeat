class Animal {
    public name:string; // 기본은 public 
    constructor(name:string){
        this.name = name
    }
    protected printName(){
        console.log("출력출력")
    }
}
class MyCat extends Animal {
    getName():string{
        this.printName()
        return `Cat name is ${this.name}` //publoc. protected 사용가능 
    }
}
let cat = new MyCat(`Lucy`);
console.log(cat.getName())
cat.name = "abc"; //public일때만 값을 사용할수있음
cat.printName()