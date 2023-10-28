const Pick = require("../models/picks.model");

module.exports = {
  getAllPicks: async (req, res) => {
    res.sendStatus(200);
  },
  getPicksByWeek: async (req, res) => {
    console.log(req.params.week);
    res.sendStatus(200);
  },
  getPicksByWeekAndUser: async (req, res) => {
    const { week, user } = req.params;
    const result = await Pick.getByWeekAndUser(week, user);
    res.send(result);
  },
};
