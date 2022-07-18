const os = require("os");
const path = require("path");

console.log( "사용 가능한 메모리 : "+ os. freemem()); //1-1)사용 가능한 메모리(RAM) 출력하기
console.log( "전체 메모리 용량 :"+ os. totalmem() ); //1-2)전체 메모리 용량 출력하기
console.log( "홈 디렉토리 경로 :"+ os. homedir()); //1-3)홈 디렉토리 경로 출력하기

const string = __filename;

console.log( "경로 구분자 :"+ path.sep); //2-1)경로 구분자 출력하기
console.log( "현재 파일의 확장자 :"+ path.extname(string) ); //2-2)현재 파일의 확장자 출력하기
//2-3)현재 파일의 경로를 분리해서 출력하기
console.log( path.parse(string) );