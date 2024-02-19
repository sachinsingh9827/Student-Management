const express = require("express");
const adminLogin = require("../controllers/admin_controller");

const router = express.Router();
router.route("/login").post(adminLogin);

module.exports = router;
