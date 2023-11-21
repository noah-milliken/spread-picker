const Dashboard = require("../models/dashboard.model");

module.exports = {
  getStandings: async (req, res, next) => {
    try {
      const { userid, week } = req.params;
      console.log(userid, week);
      const result = await Dashboard.getStandings(userid, week);
      res.send(result);
      console.log(result);
    } catch (error) {
      next(error);
    }
  },
};

// const testGetStandings = async () => {
//   try {
//     const userid = 5;
//     const week = 10;
//     const result = await Dashboard.getStandings(userid, week);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Call the asynchronous function
// testGetStandings();
