const User = require("../models/user.model");

module.exports = {
  getAllUsers: async (req, res) => {
    console.log("hit users endpoint");
    const result = await User.getAll();
    res.send(result);
  },
  getUser: async (req, res) => {
    const user = req.params.userId;
    const result = await User.getUser(user);
    res.send(result);
  },
  getUserPicksByWeek: async (req, res) => {
    const { week } = req.params;
    const result = await User.getPicksByUserAndWeek(week);
    res.send(result);
  },
  makePick: async (req, res) => {
    console.log(req.body);
    const { pick, user_id, week_num, match_id } = req.body;
    console.log(pick);
    const result = await User.make(pick, user_id, week_num, match_id);
    res.send(result);
  },
  //   evaluate: async (req, res) => {
  //     console.log("evaluate");
  //     const result = await Pick.evaluate();
  //     res.send(result);
  //   },

  //   calculateCorrect: async (req, res) => {
  //     const { week, user } = req.params;
  //     const result = await Pick.calculateCorrect(week, user);
  //     console.log(result);
  //     res.send(result);
  //   },
};
