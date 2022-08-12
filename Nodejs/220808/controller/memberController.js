const Member = require('../model/Member');

exports.get_main = ( req, res ) => {
    res.render('main');
    };

exports.signup = ( req, res ) => {
    res.render('signup');
}

exports.post_signup = ( req, res ) => {
    Member.insert(req.body.id, req.body.pw, req.body.name,req.body.gender, req.body.birthday, function(result){
        res.send("회원가입 성공!");
    });
}

exports.login = ( req, res ) => {
    res.render('login');
}

exports.post_login = ( req, res ) => {
    Member.post_login(req.body.id, req.body.pw, function(result){
        if(result.length == 0 ){
            res.send("login 실패");
        } else{
            res.send("login 성공");
        }
    })
}