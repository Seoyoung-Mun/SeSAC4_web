const http =require('http');
const fs = require('fs').promises;

//const server = http.createServer( async function (req, res){
//     try{
//         const data = await fs. readFile('./220630.ejs');
//         res.writeHead(200);
//         res.end(data);
//     } catch(err) {
//         console.error(err);
//         res.writeHead(404);
//         res.end(err.message);
//         }
// });
app.set( 'view engine', 'ejs');
app.use( '/abc', express.static( 'public'));
app.get('/', (req,res) => {
    res.render("220630");

});

server.listen(8080, function(){
    console.log( "8080번 포트");
});