const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const path = require( "path" );
const multer = require( "multer" );
const { read } = require("fs");
const upload = multer({
    // dest: "uploads/", //경로(폴더)를 정해주는 과정(파일이 어느곳으로)
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null,'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {filesSize: 5*1024*1024 },
});

function test(req, res, next){
    console.log( "여기는 test 함수입니다.");
    console.log( req.path );
    req.aaa 
    next();
}
function test2(req, res, next){
    console.log( "여기는 test2 함수입니다.");
    req.aaa
    next();
}
app.set("view engine","ejs");
app.use( express.static( "public" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", test, test2, function(req,res){
    res.render("index");
});
//업로드.싱글 = 파일을 한개 업로드
app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.send("Upload");
});
app.post("/upload/array", upload.array('userfile'),function(req, res){
    console.log(req.body);
    console.log(req.files);
    //업로드.어레이는 여러파일을 담고있기때문에 files 로 복수 선택
    res.send("Upload Array");
})
//업로드.필드스 안에 파일명을 하나씩 지정해줘야하는 번거로움이 있음
app.post("/upload/fields", upload.fields([{name:'userfile'},{name:'userfile2'},{name:'userfile3'}]), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.send("Upload");
});


app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})