const express = require('express');
const member = require('../controller/memberController');
const router = express.Router();

router.get("/", member.get_members);
router.post("/signup", member.post_signup);

module.exports = router;