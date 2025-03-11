const express = require("express");
const router = express.Router();
const {
  createBattle,
  getBattles,
} = require("../controllers/battleController");

router.post("/create", createBattle);
router.get("/", getBattles);




module.exports = router;