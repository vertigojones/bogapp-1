// dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", err => {
  console.log(err);
});

db.on("open", () => {
  console.log("Connected to MongoDB");
});

// middleware
app.use(logger("dev"));
app.use(bodyParser.json());

// set up routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const creatureController = require('./controllers/creatureController')
app.use('/api/creatures', creatureController)

// set up port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Bog of Eternal Stench is up and running on PORT 3001");
});
