var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});

io.on("connection", function(socket){ // connection-이벤트명이 정해진것임 
    console.log("connected"); //서버에선 connected
    socket.emit("hello", "server hello");
    socket.on("click", function(data){
        console.log("client click");
        socket.emit("clickResponse", 'success'); //socket
        io.emit("clickResponse", "io success"); //io는 '방 개념이 아닌'모든 연결(전체연결)에 대한 정보를 가지고있다
    })
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});