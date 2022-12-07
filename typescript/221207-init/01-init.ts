

// 변수
// 키워드 변수이름 : 타입 
var str1 : string = '문자열';
// str1 = true; //타입에러
var num1:number = 1;
var flag:boolean = true;
var any:any; //모든것을 허용하는 any
any = 1;
any = '문자';
any = false;
any = [];

var arr1 : number[] = [1, 2, 3, 4, 5];
// arr1.push('a'); // 타입에러
var arr2 : string[] = ['a','b'];
// 튜플tuple : 배열의 길이기ㅏ 고정되어 있고 타입도 지정
var arr3:[string, number] = ['1', 2];
// var arr3:[string, string] = [1,1]; // 타입에러
var arr4:object = [1,'a']; // 타입이 확실하지 않지만 배열일 때 object

enum Values { 값1, 값2 };
var v1:Values;
v1 = Values.값1;

//유니언 : 타입
var v2: string|number;


// 함수
/*
    function 함수이름(매개변수 : 타입) : 반환값타입{
        반환값
    }
 */
// function sum1 (a,b) {
//     return a + b;
// }
// console.log( sum1(1,'a') );

function sum2 (a: number, b:number) : number {
    return a + b;
}
console.log(sum2(1,2));
console.log(sum2(1,NaN));


function sum3(a: number, b=10) :number {
    return a+b;
}
console.log( sum3(1,3) );
console.log( sum3(1) );

const func1 = (a:string) =>{};


//인터페이스 : 약속,규칙을 미리 정해 놓는 것
interface Student {
    name : string,
    age : number
    nickname?: string
};
var stu1:Student = {
    name: '이름',
    age: 10,
}
var stu2:Student = {
    name: '이름2',
    age: 20,
    nickname: 'student2'
}

interface Shape {
    width: number;
    getLength(): number;
}
class Square implements Shape {
    width: number;
    constructor(w:number) {
        this.width = w;
    }
    // height: number;
    getLength(): number {
        return 0;
    }
}

//클래스
/*
class 클래스이름 {
    변수명1: 타입;
    constructor(변수명:타입, 변수명:타입) {
        this.변수명1 = 변수명; 
    }
}
*/
interface Developer {
    name: string;
    getName(): string;
}
class Developer1 implements Developer{
    readonly name: string;
    constructor(name: string){
        this.name = name;
    };
    getName(): string{
        return this.name;
    }
}
var dev1 = new Developer1("새싹");
//dev1.name ="SeSAC"; //에러 name이 readonly이면 값을 변경할 수 없음
console.log(dev1.getName());

class Developer2 {
    constructor ( readonly name : string ) {}
    getName(): string {
        return this.name;
    }
}
var dev2 = new Developer2("코딩온");

//타입검사
// primitive type => typeof
// object type => instanceof
var abc = 1;
console.log ( typeof(abc) ); //기본타입에 대한 검사

// 클래스 타입을 비교하는 instatanceof (기본타입에대한 타입검사는 할 수 없음)
if ( dev2 instanceof Developer1 ){

}



//제네릭 (Generics) : 재사용성을 높이기 위해서 (any를 최대한 안쓰기 위해 사용)
// Array<number> = number[]
// Array<>  -어떤 타입이든 담을 수 있을 때 빈<>를 사용함
// const [age, setAge] = useState<number>(0);

function getText<S>(text:S) :S {
    return text;
}
getText<number>(1);
getText<string>('a');
getText(1);