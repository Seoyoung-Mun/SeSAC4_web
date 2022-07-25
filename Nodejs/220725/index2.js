//get으로 정보 받기
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index2");
});

app.get("/receive2", function(req,res){

    console.log( req.body );
    console.log( req.query );
    res.render("receive2", req.query);
});

app.post("/receive", function(req,res){ 
    console.log( req.body );
    res.render("index2");

});

app.listen(port,()=>{
    console.log("Server Port", port );
});