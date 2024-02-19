const { Schema, model } = require("mongoose");

const CourseSchema = new Schema(
  {
    course: {
      type: String,
      require: true,
    },
    branch: {
      type: String,
      require: true,
      unique: true,
    },
    durationInYear: {
      type: Number,
      require: true,
    },
    totalSem: {
      type: Number,
      require: true,
      default: 0,
    },
    fees: {
      type: Number,
      require: true,
    },
    subject1: {
      type: String,
      require: true,
    },
    subject2: {
      type: String,
      require: true,
    },
    subject3: {
      type: String,
      require: true,
    },
    subject4: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const CourseModel = model("course", CourseSchema);
module.exports = CourseModel;
