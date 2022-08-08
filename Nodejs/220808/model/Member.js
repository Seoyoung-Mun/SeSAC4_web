const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'VIPseo0330?',
    database: 'sesac'
});

exports.get_members = (cb)=> {
    cnn.query('SELECT * FROM member',(err, rows)=>{
        if(err) throw err;
        console.log("get : " + rows);
        cb(rows);
    });
}

exports.insert = (id, pw, name, gender, birthday, cb) => {
    var sql = "INSERT INTO member(id,pw,name,gender,birthday) VALUES ('" + id +"', '" + pw +"', '"+ name +"', '" + gender + "', '" + birthday + "')";
    cnn.query( sql, (err,rows) => {
        if(err) throw err;
        cb(rows);
    })
}
