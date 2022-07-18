const returnString = require("./func.js"); //한개의 모듈을 가져올 때
const { a, b } = require("./variable.js"); //여러개의 모듈을 가져올 때

console.log( returnString() );