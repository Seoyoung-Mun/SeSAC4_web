// : 타입 표기 (Type Annotation)
let str : string = 'hi';
let num : number = 1;
let flag : boolean = true;
let age : number | string ;
age = 10;
age ='열살';
let any : any;
// 모든 타입을 허용하는 any

// Array
let arr1 : number[] = [1,2,3,4,4];
let arr2 : string[] = ['a','b','c'];
let arr3 : Array<number> = [1,2,3,4,5]; //arr1과 같은 타입
// Tuple 바꿀 수 없는 -> 타입과 배열길이를 고정
let arr4 : [string, number] = ['str',1];
// arr4[1].concat(); //concat은 문자를 연결할 때 쓰는 메소드라 숫자와 연결시 에러
// Enum 특정한 값들의 집합을 만들고 그 집합안에서 선택할 수 있게 하는 것
enum Names {홍길동, 코딩온, 새싹}; 
let name1 : Names = Names.홍길동;
name1 = Names.코딩온;
//자바스크립트에서는 enum을 잘 쓰지 않는다.

// void
// 함수 : 반환값이 없을 때 / 변수 : undefined와 null만 들어갈 수 있음
let void1 : void = undefined;
function void2() : void {
    console.log('11');
}

// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다. 절대 반환하지 않음
// function neverEnd(): never {
//     while (true){

//     }
// }

let test : any; // 모든 타입 허용
test = 1;
test = [1,2,3];

let test2 : object; // 기본타입을 제외한 나머지 모두가 들어갈 수 있음 (array, tulple 등)
// test2 = 1; //에러
test2 = [1,2,3];
