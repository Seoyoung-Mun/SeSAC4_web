const express = require('express');
const member = require('../controller/memberController');
const router = express.Router();

router.get("/", member.get_main);

router.get("/signup", member.signup);
router.post("/signup", member.post_signup);

router.get("/login", member.login);
router.post("/login", member.post_login);

router.get("/after", member.after);

module.exports = router;