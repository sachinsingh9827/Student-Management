const { Schema, model, default: mangoose } = require("mongoose");

const FeesSchema = new Schema(
  {
    stdId: {
      type: mangoose.Types.ObjectId,
      require: true,
    },
    fees: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);
const FeesModel = model("fees", FeesSchema);
module.exports = FeesModel;
