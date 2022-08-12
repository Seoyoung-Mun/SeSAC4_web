const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.set("view engine", "ejs");
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge: 30000, //만료기간(30초)
    path: '/', //쿠키에 접속할 수 있는 경로 '/get/a/b'이라면 /get/a/b경로에서만 확인 할 수 있다-> 경로 제한
                // 경로가 '/'이라면 '/'이하의 모든 경로에서 확인 가능
    httpOnly: true, // httpOnly를 설정하면 웹서버를 통해서만 쿠키에 접근 할 수 있고, 클라이언트는 볼 수 없음
    signed: true // 쿠키를 암호화 시키겠다 value 값이 숨겨져서 나타남

};

app.get("/", (req,res) => {
    res.cookie('key', 'value', cookieConfig);
    res.render("index2");
});

app.get("/popup", (req,res) => {
    res.render("popup");
})

app.listen(8000, () =>{
    console.log( "server : ", 8000 );
})