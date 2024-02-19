const { Schema, model, default: mongoose } = require("mongoose");
const studentSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    fname: {
      type: String,
      require: true,
    },
    mname: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    courseId: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    startYear: {
      type: String,
      require: true,
    },
    lastYear: {
      type: String,
      require: true,
    },
    fees: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      default: "images/default.png",
    },
  },
  { timestamps: true }
);
const studentModel = model("student", studentSchema);
module.exports = studentModel;
