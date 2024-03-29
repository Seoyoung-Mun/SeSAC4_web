const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use( express.static( "uploads" ) );
app.use( express.urlencoded({extended: true }));
app.use( bodyParser.json() );

const router = require("./routes");
app.use("/user", router); // /경로를 입력하여 router로 이동
/* 경로 예시
const board = require("./routes/board") // 경로->"./폴더/파일명"
app.use("/board", board);
*/

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})


app.get("/user/info",(req,res)=>{});
app.patch("/user/info",(req,res)=>{});
app.delete("/user/info",(req,res)=>{});
app.get("/user/register",(req,res)=>{});
app.post("/user/register",(req,res)=>{});
app.get("/user/login",(req,res)=>{});
app.post("/user/login",(req,res)=>{});
app.get("/super/login",(req,res)=>{});
app.post("/super/login",(req,res)=>{});

/* 주석 : 라우트파일에 있는 내용들
const userRouter = express.Router();
userRouter.get("/info",(req,res)=>{});
userRouter.patch("/info",(req,res)=>{});
userRouter.delete("/info",(req,res)=>{});
userRouter.get("/register",(req,res)=>{});
userRouter.post("/register",(req,res)=>{});
userRouter.get("login",(req,res)=>{});
userRouter.post("login",(req,res)=>{});
*/
app.use("/user",userRouter);
/*
const superRouter = express.Router();
superRouter.get("/login",(req,res)=>{});
superRouter.post("/login",(req,res)=>{});
*/
app.use("/super",superRouter);