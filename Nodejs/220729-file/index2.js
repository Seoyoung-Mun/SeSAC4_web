const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const path = require( "path" );
const multer = require( "multer" );
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null,'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null,req.body.ID + ext);
        },
    }),
    limits: {filesSize: 5*1024*1024 },

});

app.set("view engine","ejs");
app.use( express.static( "uploads" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index2");
});

//업로드.싱글 = 파일을 1개 업로드
app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    


    //res.sendFile(uploads/ID+ext);
    //res.send("img", { src: './uploads/' + ID + ext });
    //res.render("img",res.sendFile(ID + ext));
    //위에 이거 다 아니었음..

    res.render("img", { filename: req.file.filename});
});



app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})