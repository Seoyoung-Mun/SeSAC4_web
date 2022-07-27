const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index"); //views폴더 안에 index.ejs
});

app.get("/receive2", function(req,res){ // /receive는 상대경로
    // console.log("receive-get"); 
    // res.render("index");
    console.log( req.body );
    console.log( req.query );
    res.render("receive", req.query);
});

app.post("/receive", function(req,res){ 
    console.log("receive-post"); // get과 post 비교
    console.log( req.body );
    res.render("index");
    
    // console.log( req.body );
    
    // res.render("receive", req.body);  //views폴더 안에 receive.ejs 
    //render = view를 보여줌

});

app.listen(port,()=>{
    console.log("Server Port", port );
});