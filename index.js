require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

// const comicsRoutes = require("./routes/comics");
// app.use(comicsRoutes);

// const charactersRoutes = require("./routes/characters");
// app.use(charactersRoutes);

app.get("/characters", async (req, res) => {
  try {
    const characters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.APIKEY}`
    );
    return res.status(200).json(characters.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.get("/character/:characterId", async (req, res) => {
  try {
    const character = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.APIKEY}`
    );
    return res.status(200).json(character.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.get("/comics", async (req, res) => {
  try {
    const comics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.APIKEY}`
    );
    return res.status(200).json(comics.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.get("/comics/:characterId", async (req, res) => {
  try {
    const character = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.APIKEY}`
    );
    return res.status(200).json(character.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

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
