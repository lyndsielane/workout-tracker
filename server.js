const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.set("toJSON", { virtuals: true });

// routes
app.use(morgan("combined"));

app.use(require("./routes/"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
