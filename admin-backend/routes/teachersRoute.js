const express = require("express");
const router = express.Router();

const {
  newTeacher,
  TeachersList,
  AddImage,
  TeachersLogin,
  deleteTeacher,
  getStudentByCourse,
  getSubject,
} = require("../controllers/teachersController");
router.route("/teacher").post(AddImage, newTeacher).get(TeachersList);
router.route("/teachersLogin").post(TeachersLogin);
router.route("/deleteteacher/:id").delete(deleteTeacher);
router.route("/getstudentBycourse/:id").get(getStudentByCourse);
router.route("/gettechersub/:id").get(getSubject);

module.exports = router;
