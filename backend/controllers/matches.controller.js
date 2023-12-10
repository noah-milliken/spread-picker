const { BadRequest, DatabaseError } = require("../errors/Errors");
const Match = require("../models/matches.model");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const weeks = await Match.getWeeks();
      res.send(weeks);
    } catch (error) {
      if (error.code) {
        throw new DatabaseError(error.message, error.code);
      }
      next(error);
    }
  },

  byWeek: async (req, res, next) => {
    try {
      const weekNum = req.params.week;
      const week = await Match.getWeekByNum(weekNum);
      console.log(week);
      if (week.length < 1) {
        throw new BadRquest(`Week ${week}doesn't exist.`);
      }

      res.send(week);
    } catch (error) {
      if (error.code) {
        throw new DatabaseError(error.message, error.code);
      }
      next(error);
    }
  },
  //This method isnt used by the client.
  calculateSpreadResult: async (req, res, next) => {
    try {
      const weekNum = req.params.week;
      const week = await Match.calculateSpreadResult(weekNum);
      res.send(200);
    } catch (error) {
      if (error.code) {
        throw new DatabaseError(error.message, error.code);
      }
      next(error);
    }
  },
};
