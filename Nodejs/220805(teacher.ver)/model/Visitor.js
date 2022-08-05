const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'VIPseo0330?',
    database: 'sesac'
});

exports.get_visitors = (cb) => {
    cnn.query( 'SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log(rows);
        cb(rows);
    });
}
exports.insert = ( name, comment, cb ) => {
    var sql = "INSERT INTO visitor(name, comment) VALUES ('" + name + "', '" + comment + "')";
    //테이블에 데이터를 넣는 작업
    cnn.query( sql, (err, rows) =>{
        if ( err ) throw err;

        console.log( rows );
        cb( rows.insertId );
    });
}