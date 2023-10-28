const express = require("express");
const router = express.Router();
const pickController = require("../controllers/picks.controller");

router.get("/", pickController.getAllPicks);
router.get("/:week", pickController.getPicksByWeek);
router.get("/:week/:user", pickController.getPicksByWeekAndUser);
router.get("/:week/:user/calculate", pickController.calculateCorrect);
router.get("/evaluate", pickController.evaluate);
router.post("/", pickController.makePick);

module.exports = router;
