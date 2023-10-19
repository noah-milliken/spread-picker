const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("spreadPicker", "user", "password", {
//   dialect: "sqlite",
//   host: "./spreadPickerDb.sqlite",
// });
const sequelize = new Sequelize("spread-picker-schema", "root", "squeak207", {
  dialect: "mysql",
});
const User = require("./models/userModel");
const Match = require("./models/matchModel");
const Picks = require("./models/picksModel");
sequelize
  .authenticate()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

sequelize.drop({ match: /_test$/ });
module.exports = sequelize;
