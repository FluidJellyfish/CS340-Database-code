const express = require("express");
const router = express.Router();
const {
  addGym,
  getGyms,
} = require("../controllers/gymController");

router.post("/create", addGym);
router.get("/", getGyms);




module.exports = router;