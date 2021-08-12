const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.send("Allo!");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
