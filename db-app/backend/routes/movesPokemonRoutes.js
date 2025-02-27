const express = require("express");
const router = express.Router();
const {
  addMoveToMoveset
} = require("../controllers/movesPokemonController.js");


router.post("/pokemon/moves/create", addMoveToMoveset);


module.exports = router;
