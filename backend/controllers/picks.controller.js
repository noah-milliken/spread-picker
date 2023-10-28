const Pick = require("../models/picks.model");

module.exports = {
  getAllPicks: async (req, res) => {
    const result = await Pick.getAll();
    res.send(result);
  },
  getPicksByWeek: async (req, res) => {
    const week = req.params.week;
    const result = await Pick.getByWeek(week);
    res.send(result);
  },
  getPicksByWeekAndUser: async (req, res) => {
    const { week, user } = req.params;
    const result = await Pick.getByWeekAndUser(week, user);
    res.send(result);
  },
  makePick: async (req, res) => {
    console.log(req.body);
    const { pick, user_id, week_num, match_id } = req.body;
    const result = await Pick.make(pick, user_id, week_num, match_id);
    res.send(result);
  },
};
