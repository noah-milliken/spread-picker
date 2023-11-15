const Match = require("../models/matches.model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const weeks = await Match.getWeeks();
      res.send(weeks);
    } catch (error) {
      console.error("Error in matches.weeks", error.message);
      throw error;
    }
  },

  byWeek: async (req, res) => {
    try {
      const weekNum = req.params.week;
      const week = await Match.getWeekByNum(weekNum);
      res.send(week);
    } catch (error) {
      console.error("Error in matches.weekNum", error.message);
      throw error;
    }
  },
  calculateSpreadResult: async (req, res) => {
    try {
      const weekNum = req.params.week;
      const week = await Match.calculateSpreadResult(weekNum);
      res.send(200);
    } catch (error) {
      console.error("Error in calculateSpreadResult:", error.message);
      next(error);
    }
  },
};

Match.calculateSpreadResult(10);
