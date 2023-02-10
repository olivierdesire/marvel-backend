require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started");
});
