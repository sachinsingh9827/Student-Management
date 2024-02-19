const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  }

  // { timeStamp: true }
);

const adminModel = model("admins", adminSchema);

module.exports = adminModel;
