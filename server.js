const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
//Cors

const corsOptions = {
   origin: ["http://localhost:3000", "https://inshare-app-asad.herokuapp.com"],
  // origin: process.env.ALLOWED_CLIENTS.split(","),
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());

const connectDB = require("./config/db");

//Template Engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//Routes

app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
  connectDB();
});
