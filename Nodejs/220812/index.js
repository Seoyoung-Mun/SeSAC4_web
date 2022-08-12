const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');

app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // resave: false, // 세션은 만료기간이 따로 없기 때문에 세션을 덮어쓰기 할지 여부
    // saveUninitialized: true
}))

const cookieConfig = {
    maxAge: 30000, //만료기간(30초)
    path: '/', //쿠키에 접속할 수 있는 경로 '/get/a/b'이라면 /get/a/b경로에서만 확인 할 수 있다-> 경로 제한
                // 경로가 '/'이라면 '/'이하의 모든 경로에서 확인 가능
    httpOnly: true, // httpOnly를 설정하면 웹서버를 통해서만 쿠키에 접근 할 수 있고, 클라이언트는 볼 수 없음
    signed: true // 쿠키를 암호화 시키겠다 value 값이 숨겨져서 나타남

};

app.get("/index", (req,res) => {
    req.session.name = "홍길동";
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req, res)=> {
    console.log(req.session.name);
    //console.log(req);
    console.log( req.cookies );
    res.send( req.cookies );
})

app.get("/cookie", (req, res) => {
    res.render("cookie");
})

app.get("/destroy", (req, res) => {
    //res.render("cookie");
    req.session.destroy(function(err){
        res.send("삭제");
        })
        req.session.name = ""; //특정하게 하나만 지우고싶은 값에 빈값을 넣음 
}) // 예를들어 로그아웃을 하고자 할때 세션에 로그인정보를 destroy 하여 로그아웃되게 할 수 있음

app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", (req, res) => {
    var flag = true; //db에서 나온 결과 값이 true라고 가정해서 만든 flag
    if ( flag ) {
        req.session.id = req.body.id;
        res.redirect("/profile");
    } else res.redirect("/login"); // 로그인이 실패한 경우라면 로그인창이 다시 띄워짐
})
app.post("/profile", (req, res) => {
    if (req.session.id == undefined || req.session.id == "" ){ 
        res.redlrect("/login");
        return false;
    } //if문을 빠져나왔다는 것은 로그인이 성공했다는 뜻
    //req.session.id 로 작업~
    res.render("profile");
})
app.get("/main", (req, res) => {

})

app.listen(8000, () =>{
    console.log( "server : ", 8000 );
})

/*
팀 프로젝트시 마일스톤 예시
스프린트 작성 ex 로그인을 한다 - 1.회원가입, 로그인 폼 UI 2.회원가입API 3.로그인API 4.간편로그인 5.서버세션관리
*/