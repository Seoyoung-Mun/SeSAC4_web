//로그인
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine","ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index5");
});

app.get("/receive", function(req,res){
    console.log("receive-get"); 
    res.render("index5");

});

app.post("/receive2", function(req,res){ 
    console.log("receive-post");
    console.log( req.body );
    // 1. info.txt의 내용을 //로 구분하여 배열에 담는다.
    let string = fs.readFileSync("./info.txt").toString();
    console.log(string);
    let strArray = string.split('//');
    console.log(strArray[0],strArray[1],strArray[2]);
    
    // 2. res에 받아온 값과 배열1값과 배열2 값을 비교하는 조건문을 작성한다.
    let ID = req.body.ID
    let password = req.body.password
    if ( strArray[1] == ID && strArray[2] == password){
        res.render("receive5-1");
    } else  res.render("receive5-2");
});


app.listen(port,()=>{
    console.log("Server Port", port );
});