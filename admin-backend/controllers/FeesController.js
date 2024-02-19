const { ObjectId } = require("mongodb");

const FeesModel = require("../models/FeesModal");

async function addFees(req, res) {
  let { fees, stdId } = req.body;
  console.log(req.body);
  try {
    let result = await FeesModel.create({
      fees,
      stdId,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function feesList(req, res) {
  try {
    let id = req.params.id;
    console.log("id", id);
    let result = await FeesModel.find({ stdId: id });
    //console.log("feesdtl",result);
    res.status(200).json({ msg: "success", status: 200, result: result });
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = { addFees, feesList };
