const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

router.get("/a", function(req,res){
    res.send("Index");
});

router.get("/register", user.get_user);
//command+클릭으로 get_user 이동가능

module.exports = router;
// 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.