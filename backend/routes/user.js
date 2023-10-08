const express = require("express");
const router = express.Router();

const { getUserProfile, updateProfile, generateQRCode, getPublicProfile } = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/me").get(isAuthenticated, getUserProfile);
router.route("/publicProfile/:id").get(getPublicProfile);
router.route("/update").put(isAuthenticated, updateProfile);
router.route("/generateQR").post(generateQRCode);

module.exports = router;
