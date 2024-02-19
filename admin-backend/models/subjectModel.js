const { Schema, model } = require("mongoose");

const SubjectSchema = new Schema(
  {
    subject: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const SubjectModel = model("subjects", SubjectSchema);
module.exports = SubjectModel;
