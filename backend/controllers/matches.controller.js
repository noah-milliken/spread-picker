const Match = require("../models/matches.model");

module.exports = {
  getAll: async (req, res) => {
    const weeks = await Match.getWeeks();
    res.send(weeks);
  },

  byWeek: async (req, res) => {
    const weekNum = req.params.week;
    const week = await Match.getWeekByNum(weekNum);
    res.send(week);
  },
};
