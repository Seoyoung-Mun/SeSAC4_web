const express = require('express');
const app = express();
const port = 8000;


app.set( 'view engine', 'ejs');
//app.use( express.static( 'public')); // static 정적파일 관리하는 곳이 public폴더이다 라는 뜻. - 포트주소 뒤에 /apple.jpeg 파일 이름만 적어도 찾을 수 있음
app.use( '/abc', express.static( 'public')); // /abc  abc라는 가상의 공간 안에 public 라는 뜻. (abc가 pubilc을 대체하도록 설정한 것) - 포트주소 뒤에 /abc/apple.jpeg

app.get('/', (req,res) => {
    //res.send( 'Hello Express!' );
    var list = ['apple','banana']; //DB에서 정보를 가져왔다.
    res.render("test" , {list:list}); //ejs를 사용할거라고 미리 set을 해놓았기 때문에 확장자를 쓰지 않아도 된다.
    
    //view관련 파일들은 views폴더에 모두 넣는다고 약속함
});

app.listen(port, () => {
    console.log( 'Server port : ', port );
});