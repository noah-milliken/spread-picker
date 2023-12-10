const League = require("../models/leagues.model");
const BadRequest = require("../errors/Errors");
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
      //Check If league Name is taken in the database.
      const leagueExists = await League.exists(league_name);
      if (leagueExists) {
        throw new BadRequest("This league already exists");
      }
      const result = await League.make(league_name, league_owner);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  addUser: async (req, res, next) => {
    try {
      const { league_name, user_id, league_id } = req.body;
      const userInLeague = await League.hasUser(league_id, user_id);
      console.log(userInLeague);
      if (userInLeague) {
        throw new BadRequest("This user is already a memeber of this league");
      }
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
