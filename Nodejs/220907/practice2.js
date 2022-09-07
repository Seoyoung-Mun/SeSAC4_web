var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    res.sendFile( __dirname + "/practice2.html");
});

io.on("connection", function(socket){
    console.log("connected");
    socket.on("send", function(msg){
        io.emit("newMessage", msg);
    })
})

http.listen( 8080, function(){
    console.log("Server port : ", 8080 );
});