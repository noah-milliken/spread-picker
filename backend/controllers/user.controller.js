const User = require("../models/user.model");

module.exports = {
  getAllUsers: async (req, res, next) => {
    console.log("hit users endpoint");
    try {
      const result = await User.getAll();
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  getUser: async (req, res, next) => {
    console.log("Get User", req.params.userId);
    try {
      const user = req.params.userId;
      const result = await User.getUser(user);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  getUserPicksByWeek: async (req, res, next) => {
    console.log("GetUserPicksByWeek:", req.params);
    try {
      const { userId, week } = req.params;
      const result = await User.getPicksByUserAndWeek(userId, week);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  getUserProfile: async (req, res, next) => {
    console.log("getUserProfile:", req.params);
    try {
      const { userId } = req.params;
      const result = await User.getProfile(userId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  makePick: async (req, res, next) => {
    console.log(req.body);
    try {
      const { pick, user_id, week_num, match_id } = req.body;
      const result = await User.make(pick, user_id, week_num, match_id);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  getCorrect: async (req, res, next) => {
    try {
      const { userId } = req.params;
      console.log(userId);
      const result = await User.getCorrect(user - Id);
      console.log(result);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
};
