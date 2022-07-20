const http = require("http");

// 서버를 열 객체를 만들 준비
const server = http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write("<h1>hi</h1>");
    res.end("<p>안녕</p>");
}); 

server.listen(8000, function(){
    console.log( "8000번 포트");
});

server.on( "request", function(){
    console.log( "Client Request");
})

server.on( "connection", function(){
    console.log("Client connection");
})

server.on( "chechContinue", function(){
    console.log("Client checkContinue");
})