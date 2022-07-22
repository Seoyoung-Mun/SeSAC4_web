const http =require('http');
const fs = require('fs');



const server = http.createServer( function (req, res){
    fs. readFile('./220630grass.html', function (req, res) {
        if ( err ){
            //promise에서의 catch
            console.error(err);
            res.writeHead(404);
            res.end(err.message);
        }
        else{
            //promise에서의 try
            res.writeHead(200);
            res.end(data);
        }
    });
//     try{
//         const data = fs. readFile('./220630grass.html');
//         res.writeHead(200);
//         res.end(data);
//     } catch(err) {
//         console.error(err);
//         res.writeHead(404);
//         res.end(err.message);
//         }
// });

server.listen(8080, function(){
    console.log( "8080번 포트");
});