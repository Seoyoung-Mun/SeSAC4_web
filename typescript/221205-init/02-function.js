// // function 함수이름 (변수명:타입) : 반환타입 {}
// // 
// const testFunction = ():string => {
//     return 'test';
// }
// console.log (testFunction ())
function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, 'a'));
console.log(sum1(1, null)); // 함수에 인자를 안보내면 안됨
function sum2(a, b) {
    return a + b;
}
console.log(sum2(1, 2));
//선택적으로 인자를 받아야 할 때는 ? 사용
function sum3(a, b) {
    return a + b;
}
console.log("sum3 : ", sum3(1));
var person = { name: '코딩온', age: 10 };
function getInfo(obj) {
}
function getInfo2(obj) {
}
var person2 = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;
;
var loginUser = function (id, pw) {
    return true;
};
var MyBook = /** @class */ (function () {
    function MyBook() {
        this.title = '책';
        this.date = "2022-12-05";
    }
    MyBook.prototype.getInfo = function () {
        console.log("정보");
    };
    MyBook.prototype.changeTitle = function (newTitle) {
    };
    return MyBook;
}());
