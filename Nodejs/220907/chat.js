var express = require("express");
const { send } = require("process");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//css 불러올 고정 폴더
app.use(express.static('public'));
app.get("/", function(req,res){
    res.sendFile( __dirname + "/chat.html");
});
// io -> 클라이언트와의 모든 연결을 갖고있음.
// socket -> 클라이언트 하나 . socket.id 클라이언트를 구분하는 식별자
var list = {};
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
        // 넘어온 data = { id :~~~ , msg :~~~}
        console.log("client messge : ", data.msg );
        data["is_dm"] = false;
        data["nickname"] = list[socket.id];
        if ( data.to == "전체"){
            io.emit("newMessage", data);
        } else {
            data["is_dm"] = true;

            let socketID = Object.keys(list).find( (key) => { return list[key] === data.to; } );
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data);
        }
    });

    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
    })
});

http.listen( 8000, function(){
    console.log("Server port : ", 8000 );
});