var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static('public'));

app.get("/", function(req,res){
    res.sendFile( __dirname + "/practice1.html");
});

io.on("connection", function(socket){
    socket.on("hello", function(data){
        console.log("client : ", data);
        socket.emit("response1","hello : 안녕하세요!")
    })
    socket.on("study", function(data){
        console.log("client : ", data);
        socket.emit("response2","study : 공부합시다!")
    })
    socket.on("bye",function(data){
        console.log("client : ", data);
        socket.emit("response2","bye : 그럼 이만!")
    })
});

http.listen( 8000, function(){
    console.log("Server port : ", 8000 );
});