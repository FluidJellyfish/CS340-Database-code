const express = require("express");
const router = express.Router();
const {
  addMoveToMoveset,
  getPokemonMoves,
  getMovesByPokemonName,
  updateMoveInMoveset,
  deleteMove,
} = require("../controllers/movesPokemonController");


router.post("/create", addMoveToMoveset);
router.delete("/delete/:id", deleteMove);
router.get("/get", getPokemonMoves);
router.get("/:pokemonName", getMovesByPokemonName);
router.put("/update", updateMoveInMoveset);
router.get("/", getPokemonMoves);


module.exports = router;
