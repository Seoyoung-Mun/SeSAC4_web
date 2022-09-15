var express = require("express");
const { send } = require("process");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    res.sendFile( __dirname + "/practice2_teacher.html");
});
// io -> 클라이언트와의 모든 연결을 갖고있음.
// socket -> 클라이언트 하나 . socket.id 클라이언트를 구분하는 식별자
var list = {};
// list = {k3434gfg: "seo"}
io.on("connection", function(socket){
    console.log("connected", socket.id);
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
        io.emit("list",list);
    })
    // io.emit("notice", socket.id + "님이 입장하셨습니다.");
    // socket.emit("info", socket.id);
    socket.on("send", function(data){
        // 넘어온 data = { msg :~~~ , to :~~~}
        console.log("client messge : ", data.msg );
        // data = {mag :~~~ , to :~~~, is_dm : false, nickname : ~~~}
        data["is_dm"] = false;
        data["nickname"] = list[socket.id];
        if ( data.to == "전체"){
            io.emit("newMessage", data);
        } else {
            data["is_dm"] = true;
            // list = {socket.id: "nickname"}
            // list[socket.id] = "nickname"
            let socketID = Object.keys(list).find( (key) => { return list[key] === data.to; } );
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data);
        }
    });

    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
        io.emit("list",list);
    })
});

http.listen( 8000, function(){
    console.log("Server port : ", 8000 );
});