// // function 함수이름 (변수명:타입) : 반환타입 {}
// // 
// const testFunction = ():string => {
//     return 'test';
// }
// console.log (testFunction ())
function sum1 (a,b) {
    return a + b;
}
console.log( sum1(1,'a') );
console.log( sum1(1 ,null)); // 함수에 인자를 안보내면 안됨
function sum2 ( a :number, b:number ) : number {
    return a + b;
}
console.log( sum2(1,2) );


//선택적으로 인자를 받아야 할 때는 ? 사용
function sum3 ( a :number, b?:number ) {
    return a + b;
}
console.log( "sum3 : ", sum3(1 ) );

let person = { name : '코딩온', age : 10 };
function getInfo (obj: {name: string, age: number}) {

}
interface PersonData {
    readonly name: string;
    age: number;
    nickname?: string;
}
function getInfo2 ( obj: PersonData){

}
let person2 : PersonData = {name : '코딩온', age : 10}
person2.age = person2.age + 1;
// person2.name = "dd"; //에러 : 읽기전용이기 때문에 수정 불가

interface login {
    (id : string, pw : string ): boolean
};
let loginUser : login = (id,pw) => {
    return true;
}
interface Book {
    title : string;
    getInfo(): void;
    changeTitle(newTitle : string): void;
}
class MyBook implements Book {
    title = '책';
    date = "2022-12-05"
    getInfo(){
        console.log("정보");
    }
    changeTitle(newTitle: string): void {
        
    }
}