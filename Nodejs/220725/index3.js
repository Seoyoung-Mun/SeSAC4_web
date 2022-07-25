//post로 정보 받기
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index3");
});

app.get("/receive", function(req,res){
    console.log("receive-get"); 
    res.render("index3");

});

app.post("/receive2", function(req,res){ 
    console.log("receive-post");
    console.log( req.body );
    res.render("receive3", req.body);
    

});

app.listen(port,()=>{
    console.log("Server Port", port );
});