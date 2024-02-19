const SubjectModel = require("../models/subjectModel");

async function addSubject(req, res) {
  let { subject } = req.body;
  try {
    let result = await SubjectModel.create({
      subject: subject,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function SubjectList(req, res) {
  try {
    let result = await SubjectModel.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
module.exports = { addSubject, SubjectList };
