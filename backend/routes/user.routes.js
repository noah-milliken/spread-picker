const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// GET Requests

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUser);
router.get("/:userId/weeks/:week", userController.getUserPicksByWeek);
router.get("/:userId/profile", userController.getUserProfile);
router.get("/:userId/getCorrectPicks", userController.getCorrect);

router.post("/", userController.makePick);

module.exports = router;
