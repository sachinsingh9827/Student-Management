const mongoose = require("mongoose");

function dbConnect(admin) {
  mongoose.connect(admin);
}
module.exports = dbConnect;
