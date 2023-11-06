const express = require("express");
const router = express.Router();
const leaguesController = require("../controllers/leagues.controller.js");

router.get("/", leaguesController.getAllLeagues);

//POST ROUTES
router.post("/", leaguesController.makeLeague);
router.post("/addUser", leaguesController.addUser);
router.post("/removeUser", leaguesController.removeUser);
module.exports = router;
