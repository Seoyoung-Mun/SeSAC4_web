const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index");
})
app.get("/test", function(req,res){
    res.send("test"); //res.send는 그냥 데이터를 보낼 뿐 Axios와 연관없다.
})
app.get("/test2", function(req,res){
    res.send({name: "test2",message: 123});
})
app.get("/receive", function (req,res) {
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + "GET 안녕"
    res.send({name:name, message: msg});
})
app.post("/receive", function (req,res) {
    console.log("receive-post");
    console.log( req.body );
    let name = req.body.name;
    let msg = req.body.name + " 안녕 ";
    //res.send( req.body.name + " 안녕 "); //send는 하나만 보낼 수 있다 그래서 여러정보를 보내려면 묶어서 보내야함.
    res.send( { name: name, message: msg} );
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})
//엑시오스라는 함수가 백한테 한번 갔다 오는데 갔다 올때, 받은 데이터를 프로미스로 해체했을때 담는 것?