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
    res.render("login");
});

app.get("/", function(req,res){
    console.log("receive-get"); 
    res.render("login");

});

app.post("/", function(req,res){ 
    console.log("receive-post");
    console.log( req.body );

    let string = fs.readFileSync("../220725/info.txt").toString();
    console.log(string);
    let strArray = string.split('//');
    console.log(strArray[0],strArray[1],strArray[2]);
    
    
    let ID = req.body.ID;
    let password = req.body.password;

    let success = strArray[0]+"님 로그인 성공";
    let fail = "아이디 혹은 비밀번호를 확인 해 주세요";
    
    if ( strArray[1] == ID && strArray[2] == password ){
        res.send({ message: success });
    } else 
        res.send({ message: fail });
});


app.listen(port,()=>{
    console.log("Server Port", port );
});