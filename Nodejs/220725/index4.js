//회원가입
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index4");
});

app.get("/receive", function(req,res){
    console.log("receive-get"); 
    res.render("index4");

});

app.post("/receive2", function(req,res){ 
    console.log("receive-post");
    console.log( req.body );
    res.render("receive4", req.body);
    
    const i = req.body.name+'//'+req.body.ID+'//'+req.body.password;
    console.log(i);

    const fs = require("fs").promises;
    fs.writeFile("./info.txt",i);
});

app.listen(port,()=>{
    console.log("Server Port", port );
});