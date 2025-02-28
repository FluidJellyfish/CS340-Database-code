const express = require("express");
const router = express.Router();
const {
  addMoveToMoveset,
  getPokemonMoves,
  getMovesByPokemonID,
  updateMoveInMoveset,
  deleteMove,
} = require("../controllers/movesPokemonController");


router.post("/create", addMoveToMoveset);


module.exports = router;
