const { Schema, model, default: mongoose } = require("mongoose");

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    techSubject: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
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
    courseId: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    img: {
      type: String,
      // default: "images/default.png",
    },
  },
  { timestamps: true }
);
const teacherModel = model("teachers", teacherSchema);
module.exports = teacherModel;
