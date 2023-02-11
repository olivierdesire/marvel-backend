require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.status(200).json("Bienvenue sur notre serveur Marvel");
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

app.all("*", (req, res) => {
  try {
    return res.status(404).json({ message: "Not found" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server has started");
});
