const express = require("express");
const router = express.Router();

const { getUserProfile, updateProfile } = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/me").get(isAuthenticated, getUserProfile);
router.route("/update").put(isAuthenticated, updateProfile);

module.exports = router;
