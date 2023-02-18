const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    let filters = "";
    if (req.query.name) {
      filters = filters + "&name=" + req.query.name;
    }
    if (req.query.skip) {
      filters = filters + "&skip=" + req.query.skip;
    }
    const characters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.APIKEY}` +
        filters
    );
    return res.status(200).json(characters.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    const character = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.APIKEY}`
    );
    return res.status(200).json(character.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
