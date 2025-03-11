const express = require("express");
const router = express.Router();
const {
  createTrainer,
  getTrainers,
  updateBattleRecord,
  updateHeldItem

} = require("../controllers/trainerController");

router.post("/create", createTrainer);
router.get("/", getTrainers);
router.put("/update/battleRecord", updateBattleRecord);
router.put("/update/itemsHeld", updateHeldItem);




module.exports = router;