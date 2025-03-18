const express = require("express");
const router = express.Router();
const {
    getPokemonTrainers,
    addPokemonToTrainer,
    getPokemonTrainerByID,
    deletePokemonTrainer
} = require("../controllers/pokemonTrainersController");

router.get("/", getPokemonTrainers);
router.post("/create", addPokemonToTrainer);
router.get("/:trainerName", getPokemonTrainerByID);
router.delete("/delete/:id", deletePokemonTrainer);


module.exports = router;