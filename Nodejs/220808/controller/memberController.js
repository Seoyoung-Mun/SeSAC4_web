const Member = require('../model/Member');

exports.get_members = (req, res) => {
    Member.get_members(function(result){
        res.render('signup', {data: result});
    })
}

exports.post_signup = ( req, res ) => {
    console.log("req.body : "+ req.body );
    Member.insert(req.body.id, req.body.pw, req.body.name,req.body.gender, req.body.birthday, function(result){
        res.send("회원가입 성공!");
    });
    
}