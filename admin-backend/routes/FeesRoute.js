const express = require("express");
const router = express.Router();

const { addFees } = require("../controllers/FeesController");
router.route("/fees").post(addFees);

module.exports = router;
