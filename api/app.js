const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/userRoutes");

const API_VERSION = 1;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(`/v${API_VERSION}/users`, userRouter);

mongoose.connect(
  process.env.MONGODB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const db = mongoose.connection;
db.on("Error: ", error => console.warn(error));

module.exports = app;
