const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class Week extends Model {}

Week.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    weekNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    homeTeam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spread: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false,
    },
    winner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Week",
  }
);

module.exports = Week;
