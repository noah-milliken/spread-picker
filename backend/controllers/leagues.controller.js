const League = require("../models/leagues.model");

module.exports = {
  getAllLeagues: async (req, res) => {
    try {
      const result = await League.getAll();
      console.log("Got All Leagues");
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  makeLeague: async (req, res) => {
    console.log(req.body);
    try {
      const { league_name, league_owner } = req.body;
      const result = await League.make(league_name, league_owner);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
};
