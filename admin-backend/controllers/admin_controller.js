const adminModel = require("../models/admin_models");

async function adminLogin(req, res) {
  // console.log("aaa", req.body);
  try {
    let admin = await adminModel.findOne({
      userId: req.body.email,
      password: req.body.password,
    });
    // console.log("test", admin);

    if (admin === null) {
      res.status(201).send({ msg: `email and password is wrong`, result: "" });
    } else {
      res.status(200).send({ msg: `success`, result: admin });
    }
  } catch (error) {
    return res.status(409).json(err);
  }
}

module.exports = adminLogin;
