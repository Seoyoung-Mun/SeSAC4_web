// class Cat {
//     constructor( name ){
//         //속성
//         this.name = name; //전역으로 올려주는 this
//     }

//     mew(){
//         console.log( this.name + "야옹" );
//     }
// }

// //클래스를 이용하여 같은 객체 몇가지를 더 만들 수 있다.
// var cat1 = new Cat("나비");
// var cat2 = new Cat("냥이"); 
// console.log( cat1 );
// cat1.mew();
// cat2.mew();

// //속성을 클래스로 보낼 수 있다.

class Car {
    constructor(color){
        this.color = color;
        this.isWheel = true;
        this.isDoor = true;
    }
    //클래스는 공통적인것들을 뽑아서 만든다
    go(){
        console.log("전진");
    }
    back(){
        console.log("후진");
    }
    returnColor(){
        console.log("red");
    }
}

module.exports = { Car };