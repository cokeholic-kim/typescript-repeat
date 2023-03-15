var _a;
let a = 10;
let b = false;
let v1 = a;
let anyv = b;
let v3 = b;
export default function getItem(user) {
    if (user.id) {
        return {
            success: true,
            value: ['Apple', 'Banana']
        };
    }
    else {
        return {
            success: false,
            error: new Error('아이디가 없음')
        };
    }
}
function someFunc(someVal, isNumber) {
    if (isNumber) {
        someVal.toFixed(2);
    }
}
function fnA(x) {
    if (x) {
        return x.toFixed;
    }
}
function fnB(x) {
    return x.toFixed;
}
function fnC(x) {
    return x.toFixed(2);
}
(_a = document.querySelector(".menu-item")) === null || _a === void 0 ? void 0 : _a.innerHTML;
document.querySelector(".menu-item").innerHTML;
document.querySelector(".menu-item").innerHTML;
//# sourceMappingURL=type03_unknown.js.map