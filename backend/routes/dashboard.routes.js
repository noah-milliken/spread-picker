const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dasboard.controller");

router.get("/");
router.get("/:userid/getStandings/:week", dashboardController.getStandings);

module.exports = router;
