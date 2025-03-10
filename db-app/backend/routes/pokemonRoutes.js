const express = require("express");
const router = express.Router();
const {
    getPokemon,
    addPokemon
} = require("../controllers/pokemonController");

router.get("/", getPokemon);
router.post("/create", addPokemon);

module.exports = router;