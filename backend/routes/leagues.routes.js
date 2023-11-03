const express = require("express");
const router = express.Router();
const leaguesController = require("../controllers/leagues.controller.js");

router.get("/", leaguesController.getAllLeagues);

//POST ROUTES
router.post("/", leaguesController.makeLeague);

module.exports = router;
