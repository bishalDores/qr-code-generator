const express = require("express");
const router = express.Router();

const { registerUser, login, socialLogin } = require("../controllers/authController");

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/socialLogin").post(socialLogin);

module.exports = router;
