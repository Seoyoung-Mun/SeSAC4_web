import Scroll from "./ScrollBox";

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

//수업내용
// class Shape {
//   constructor(w, h){
//     this.w = w;
//     this.h = h;
//   }
//   getArea(){
//     return this.w * this.h;
//   }
// }

// class Square extends Shape {
// }
// class Triangle extends Shape {
//   constructor(x,y,name) {
//     super(x,y); // 부모의 constructor을 호출
//     this.name = name;
//   }
//   getArea(){
//     return (this.w * this.h) / 2;
//   }
// }

// let shape1 = new Shape(5,4);
// console.log( shape1.getArea() );

// let shape2 = new Shape(2,3);
// console.log( shape2.getArea() );

// let shape3 = new Square(4,8);
// console.log( shape3.getArea() );
// // 부모 Shape의 것을 상속받았기 때문에 Square에 아무 메소드가 없어도 콘솔에 출력이 됨

// let shape4 = new Triangle(5,6);
// console.log( shape4.getArea() );

//실습 62

class Student {
  constructor(name,school,age,num){
      this.name = name;
      this.school = school;
      this.age = age;
      this.num = num;
  }
  getInfo(){
    console.log(this.name,this.school, this.age, this.num);
  }
}

class Kim extends Student {
  
}

class Lee extends Student {

}

let kimchi = new Kim("김치","실비김치대",500,1);
kimchi.getInfo();

let leesunsin = new Lee("이순신","거북선대",100,2);
leesunsin.getInfo();

let munSY = new Student("문서영","코딩온",18,3);
munSY.getInfo();