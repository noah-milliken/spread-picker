const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all games" });
});

//get specific week
router.get("/:id", (req, res) => {
  res.json({ message: `GET single week` });
});

//post week picks
router.post("/", (req, res) => {
  res.json({ message: "Post week picks" });
});

//Updet a week
router.patch("/:id", (req, res) => {
  res.json({ message: `Update a weeks picks` });
});

//delete a week
router.delete("/", (req, res) => {
  res.json({ message: "Delete a weeks selections" });
});

module.exports = router;
