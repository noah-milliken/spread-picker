const express = require("express");
const router = express.Router();
const matches = require("../controllers/matches.controller");

router.get("/", matches.getAll);

router.get("/:week", matches.byWeek);

module.exports = router;
