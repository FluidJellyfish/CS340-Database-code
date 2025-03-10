const express = require("express");
const router = express.Router();
const {
  createTrainer,
  getTrainers,
} = require("../controllers/trainerController");

router.post("/create", createTrainer);
router.get("/", getTrainers);




module.exports = router;