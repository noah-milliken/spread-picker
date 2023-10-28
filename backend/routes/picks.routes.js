const express = require("express");
const router = express.Router();
const pickController = require("../controllers/picks.controller");

router.get("/", pickController.getAllPicks);

router.get("/:week", pickController.getPicksByWeek);
router.get("/:week/:user", pickController.getPicksByWeekAndUser);
module.exports = router;
