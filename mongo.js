const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/hoa-online-store")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log("failed");
    console.error("Error details:", error);
  });

const newSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const collection = mongoose.model("login-signups", newSchema);
const Contact = mongoose.model("Contact", contactSchema);

module.exports = { collection, Contact };
