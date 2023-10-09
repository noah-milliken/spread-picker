const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("spreadPicker", "user", "password", {
  dialect: "sqlite",
  host: "./spreadPickerDb.sqlite",
});

module.exports = sequelize;
