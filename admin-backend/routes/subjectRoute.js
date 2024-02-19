const express = require("express");
const router = express.Router();

const { addSubject, SubjectList } = require("../controllers/subjectController");
router.route("/newSubject").post(addSubject).get(SubjectList);
module.exports = router;
