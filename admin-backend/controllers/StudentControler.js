const studentModel = require("../models/StudentModel");
const { ObjectId } = require("mongoose");
const jwt = require("jsonwebtoken");
const FeesModel = require("../models/FeesModal");
const jwtKey = "@@sachin##";

async function newStudent(req, res) {
  console.log(req.body);
  let {
    name,
    email,
    fname,
    mname,
    mobile,
    dob,
    gender,
    address,
    startYear,
    lastYear,
    fees,
    courseId,
  } = req.body;
  let password = name + "@" + dob.slice(0, 4);

  try {
    let result = await studentModel.create({
      name,
      email,
      fname,
      mname,
      mobile,
      dob,
      gender,
      address,
      password,
      startYear,
      lastYear,
      courseId,
      fees,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function StdLogin(req, res) {
  try {
    const { email, password } = req.body;
    let result = await studentModel.findOne({ email, password });

    if (!result) {
      res.status(400).send({ msg: "std not found", result: "" });
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
async function StudentList(req, res) {
  try {
    let result = await studentModel.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function getStdById(req, res) {
  try {
    let id = req.params.id;
    let result = await studentModel.aggregate([
      {
        $match: { $expr: { $eq: ["$_id", { $toObjectId: id }] } },
      },

      {
        $lookup: {
          from: "courses",
          localField: "courseId",
          foreignField: "_id",
          as: "course",
        },
      },
      {
        $unwind: "$course",
      },
    ]);
    let feesDetail = await FeesModel.aggregate([
      {
        $match: { $expr: { $eq: ["$stdId", { $toObjectId: id }] } },
      },
      {
        $group: { _id: "$stdId", fees: { $sum: "$fees" } },
      },
    ]);

    if (feesDetail.length == 0) {
      feesDetail = { _id: id, fees: 0 };
    } else {
      feesDetail = feesDetail[0];
    }
    if (result) {
      return res
        .status(200)
        .send({ msg: "success", result: result, fees: feesDetail });
    } else {
      return res.status(401).send({ msg: "student not found" });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
}
module.exports = { newStudent, StudentList, getStdById, StdLogin };
