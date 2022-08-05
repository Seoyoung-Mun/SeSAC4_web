const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost', //호스트가 IP주소 일수도 있음
    user: 'user',
    password: 'VIPseo0330?', 
    database: 'sesac'
});

exports.get_visitors = () => {
    cnn.query('SELECT * FROM visitor', (err, rows) => { //콜백함수처럼 사용해야 함
        if ( err ) throw err;
        console.log( rows );
    })
}