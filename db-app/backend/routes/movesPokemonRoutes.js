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
router.delete("/:id", deleteMove);
router.get("/get", getPokemonMoves);
router.get("/:id", getMovesByPokemonID);
router.put("/:id", updateMoveInMoveset);


module.exports = router;
