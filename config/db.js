require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  //DB Connection

  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB!");
    })
    .catch((err) => {
      throw err;
    });
}

module.exports = connectDB;
