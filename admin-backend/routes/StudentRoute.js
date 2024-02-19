const express = require("express");
const {
  newStudent,
  StudentList,
  getStdById,
  StdLogin,
} = require("../controllers/StudentControler");
const router = express.Router();

router.route("/").post(newStudent).get(StudentList);
router.route("/getStdById/:id").get(getStdById);
router.route("/stdLogin").post(StdLogin);

module.exports = router;
