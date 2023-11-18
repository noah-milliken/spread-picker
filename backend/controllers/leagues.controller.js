const League = require("../models/leagues.model");

module.exports = {
  getAllLeagues: async (req, res, next) => {
    try {
      const result = await League.getAll();
      console.log("Got All Leagues");
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  makeLeague: async (req, res, next) => {
    console.log(req.body);
    try {
      const { league_name, league_owner } = req.body;
      const result = await League.make(league_name, league_owner);
      res.send(result);
    } catch (error) {}
  },
  addUser: async (req, res, next) => {
    try {
      console.log(req.body);
      const { league_name, user_id, league_id } = req.body;
      const result = await League.join(league_name, user_id, league_id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  removeUser: async (req, res) => {
    try {
      const { league_name, user_id, league_id } = req.body;
      const result = await League.leave(league_name, user_id, league_id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  getJoinedByUser: async (req, res) => {
    console.log("Get Leagues Joined by User");
    try {
      const { userId } = req.params;
      const result = await League.getJoinedByUser(userId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
};
