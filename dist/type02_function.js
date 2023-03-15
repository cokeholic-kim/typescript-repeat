let green = {
    name: "green"
};
function printUserName() {
    console.log(this.name);
}
function printUserName2(age) {
    console.log(this.name);
}
const myFun6 = printUserName.bind(green);
myFun6();
//# sourceMappingURL=type02_function.js.map