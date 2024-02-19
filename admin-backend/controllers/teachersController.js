const jwt = require("jsonwebtoken");
const teacherModel = require("../models/teachersModal");
const multer = require("multer");
const jwtKey = "@@sachin##";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    console.log("sachin", file.originalname);
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const AddImage = multer({ storage: storage }).single("img");

async function newTeacher(req, res) {
  console.log("sachin----->", req.body);
  let { name, email, mobile, gender, address, courseId, techSubject } =
    req.body;
  let password = name + "@" + 123;
  try {
    let result = await teacherModel.create({
      name,
      email,
      mobile,
      gender,
      address,
      password,
      courseId,
      techSubject,
      // img: `images/${req.file.filename}`,
    });
    res.status(200).send(result);
    console.log(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function TeachersList(req, res) {
  try {
    let result = await teacherModel.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function TeachersLogin(req, res) {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    let result = await teacherModel.findOne({ email, password });
    console.log(result);
    if (!result) {
      res.status(400).send({ msg: "teacher not found", result: "" });
    } else {
      const paylod = { name: result.name, email: result.email };
      const token = jwt.sign(paylod, jwtKey, { expiresIn: "1h" });
      return res
        .status(200)
        .send({ msg: "success", status: 200, result: result, token: token });
    }
  } catch (error) {
    return res.status(409).json(error);
  }
}
async function deleteTeacher(req, res) {
  try {
    console.log(req.params.id);

    let result = await teacherModel.findByIdAndDelete({ _id: req.params.id });
    console.log(result);
    return res.status(200).send({ masg: "success", result: result });
  } catch (error) {
    return res.status(400).json(error);
  }
}
async function getStudentByCourse(req, res) {
  try {
    const id = req.params.id;
    let result = await teacherModel.aggregate([
      { $match: { $expr: { $eq: ["$courseId", { $toObjectId: id }] } } },
      {
        $lookup: {
          from: "students",
          localField: "courseId",
          foreignField: "courseId",
          as: "teacher",
        },
      },
      {
        $unwind: "$teacher",
      },
    ]);
    console.log(result);
    res.status(200).send({ msg: "success", result: result });
  } catch (error) {}
}

async function getSubject(req, res) {
  console.log(req.params.id);
  try {
    let result = await teacherModel.find({
      _id: req.params.id,
    });
    console.log(result);
    return res.status(200).send({ masg: "success", result: result });
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  newTeacher,
  TeachersList,
  AddImage,
  TeachersLogin,
  deleteTeacher,
  getStudentByCourse,
  getSubject,
};
