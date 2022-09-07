var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    res.sendFile( __dirname + "/practice2_teacher.html");
});
// io -> 클라이언트와의 모든 연결을 갖음
// socket -> 클라이언트 하나 . socket.id 클라이언트를 구분하는 식별자
io.on("connection", function(socket){
    console.log("connected", socket.id);
    io.emit("notice", socket.id + "님이 입장하셨습니다.");
    socket.emit("info", socket.id);
    socket.on("send", function(data){
        // 넘어온 data = { id :~~~ , msg :~~~}
        console.log("client messge : ", data.msg );
        io.emit("newMessage", data);
    });

    socket.on("disconnect", function(){
        io.emit("notice", socket.id + "님이 퇴장하셨습니다.");
    })
});

http.listen( 8000, function(){
    console.log("Server port : ", 8000 );
});