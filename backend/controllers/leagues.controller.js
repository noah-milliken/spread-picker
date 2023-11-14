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
  addUser: async (req, res) => {
    try {
      console.log(req.body);
      const { league_name, user_id, league_id } = req.body;
      const result = await League.join(league_name, user_id, league_id);
      res.send(result);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  removeUser: async (req, res) => {
    try {
      const { league_name, user_id, league_id } = req.body;
      const result = await League.leave(league_name, user_id, league_id);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
};
