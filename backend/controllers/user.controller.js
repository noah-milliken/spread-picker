const { BadRequest, DatabaseError } = require("../errors/Errors");
const User = require("../models/user.model");

module.exports = {
  getAllUsers: async (req, res, next) => {
    console.log("hit users endpoint");
    try {
      const result = await User.getAll();
      res.send(result);
    } catch (error) {
      if (error.code) {
        throw new DatabaseError(error.message, error.code);
      }
      next(error);
    }
  },
  getUser: async (req, res, next) => {
    console.log("Get User", req.params.userId);
    try {
      const user = req.params.userId;
      const isUser = await User.getUser(user);
      if (!isUser) {
        throw new BadRequest(`The user ${userId} does not exist.`);
      }
      const result = await User.getUser(user);
      res.send(result);
    } catch (error) {
      if (error.code) {
        throw new DatabaseError(error.message, error.code);
      }
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
      //My sql returns .code this is how I check for database errors.
      if (error.code) {
        return next(new DatabaseError(error.message, error.code));
      }
      return next(error);
    }
  },
  makePick: async (req, res, next) => {
    console.log(req.body);
    try {
      const { pick, user_id, week_num, match_id } = req.body;
      if (!pick || !user_id || !week_num || !match_id) {
        throw new BadRequest("Missing requierd info to make pick");
      }
      const result = await User.make(pick, user_id, week_num, match_id);
      res.send(result);
    } catch (error) {
      if (error.code) {
        throw new DatabaseError(error.message, error.code);
      }
      next(error);
    }
  },
  getCorrect: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await User.getCorrect(userId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
};
