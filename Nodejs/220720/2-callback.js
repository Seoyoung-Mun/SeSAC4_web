function func1(callback){
    callback();
}
// function func2() {
//     console.log( "안녕" );
// }
//func1(func2) //변수를 받았지만 그 변수가 함수이기때문에 실행이 됨



func1(function a(){
    console.log("안녕");
});
//인자로 보낼때 인자를 보내는 곳으로 함수를 선언 할 수 있음