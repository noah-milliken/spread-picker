const express = require("express");
// const Game = require("../models/gameModel");
const Routes = express.Router();
const Week = require("../models/matchModel");

Routes.route("/")
  .get(async (req, res) => {
    console.log("request made from frontend");
    const weeks = await Week.findAll();
    res.status(200).send(weeks);
  })
  .post(async (req, res) => {
    const weeks = req.body;
    const allWeeks = await Promise.all(
      weeks.map(async (game) => {
        const { weekNumber, homeTeam, awayTeam, spread } = game;
        const newGame = await Week.create({
          weekNumber,
          homeTeam,
          awayTeam,
          spread,
        });
        return newGame;
      })
    );
    res.status(201).json({ success: true, games: allWeeks });
  })
  .put(async (req, res) => {
    console.log(req?.body?.id);
    const updatedWeek = await Week.update(req.body.week, {
      where: { id: req.body.id },
    });
    res.status(200).send(updatedWeek);
  })
  .delete(async (req, res) => {
    await Week.destroy({ where: { id: req?.body?.id } });
    res.sendStatus(200);
  });

Routes.delete("/weeks/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Week.destroy({ where: { id } });
  res.sendStatus(200);
});

Routes.delete("/weeks", async (req, res) => {
  await Week.destroy({ where: {} });
  res.sendStatus(200);
});

module.exports = Routes;
