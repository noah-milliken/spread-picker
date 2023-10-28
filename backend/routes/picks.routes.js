const express = require("express");
const router = express.Router();
const pickController = require("../controllers/picks.controller");

router.get("/", pickController.getAllPicks);
router.get("/:week", pickController.getPicksByWeek);
router.get("/:week/:user", pickController.getPicksByWeekAndUser);

// router.post("/", (req, res) => {
//   res.send(200);
//   console.log(req.body);
// });

router.post("/", pickController.makePick);
module.exports = router;
