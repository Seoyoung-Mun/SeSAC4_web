const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'VIPseo0330?',
    database: 'sesac'
});




exports.insert = (id, pw, name, gender, birthday, cb) => {
    var sql = "INSERT INTO member(id,pw,name,gender,birthday) VALUES ('" + id +"', '" + pw +"', '"+ name +"', '" + gender + "', '" + birthday + "')";
    cnn.query( sql, (err,rows) => {
        if(err) throw err;
        cb(rows);
    })
}

exports.post_login = (id, pw, cb)=> {
    var sql = "SELECT * FROM member WHERE id='" + id + "' AND pw='" + pw + "';"
    cnn.query(sql,(err, rows)=>{
        if(err) throw err;
        cb(rows);
    });
}
