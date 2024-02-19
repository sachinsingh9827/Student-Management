const express = require("express");
const router = express.Router();

const {
  addCourse,
  CoursList,
  deleteCourse,
} = require("../controllers/CorseControler");
router.route("/course").post(addCourse).get(CoursList);
router.route("/deleteCourse/:id").delete(deleteCourse);

module.exports = router;
