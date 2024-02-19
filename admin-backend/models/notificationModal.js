const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  title: String,
  content: String,
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  timestamp: { type: Date, default: Date.now },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
