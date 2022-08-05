const User = require("../model/User");
exports.index = (req,res) => {
    res.render("index");
}

exports.register = (req,res) => {
    res.render("register");
    
}

exports.post_register = (req,res) => {
    User.post_user(req.body);
    res.send(req.body);
}

exports.login = (req,res) => {
    res.render("login");
}

exports.post_login = async (req,res) =>{
    var data = await User.get_user();
    
    var line = data.split("\n");

    // for( let i = 0 ; i < line.length ; i++ ){
    //     // i = 0, line[i] = "aaa//문서영//123//여성//aaa@aaa.com";
    //     var info = line[i].split("//");
    //     if( info[0] == req.body.ID && info[2] == req.body.passwor){
    //         res.send("로그인 성공");
    //         return false;
    //     }
    // }
    var flag = false;
    for (let i = 0; i < line.length; i++ ){
        var info = info[i].split("//");
        if ( info[0] == req.body.ID && info[2] == req.body.password) flag = true;
    }
    if ( flag ) res.send("로그인 성공");
    else res.send("로그인 실패");

    // var info = data.split("//");
    // if ( info[0] != req.body.ID){
    //         res.send("아이디 다름");
    //     } else if ( info[2] != req.body.password){
    //         res.send("비밀번호가 다름");
    //     } else {
    //         res.send("로그인 성공!")
    //     }

    console.log( data );
}