const CourseModel = require("../models/CourseModel");
const { ObjectId } = require("mongodb");
async function addCourse(req, res) {
  let {
    course,
    branch,
    durationInYear,
    fees,
    subject1,
    subject2,
    subject3,
    subject4,
  } = req.body;
  let totalSem = durationInYear * 2;
  branch = course + "-" + branch;
  try {
    let result = await CourseModel.create({
      course,
      branch,
      durationInYear,
      fees,
      totalSem,
      subject1,
      subject2,
      subject3,
      subject4,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function CoursList(req, res) {
  try {
    let result = await CourseModel.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function deleteCourse(req, res) {
  try {
    console.log(req.params.id);
    let result = await CourseModel.findByIdAndDelete({ _id: req.params.id });
    console.log(result);
    return res.status(200).send({ masg: "success", result: result });
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = { addCourse, CoursList, deleteCourse };
