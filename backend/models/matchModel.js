const { Model, DataTypes, Op } = require("sequelize");
const sequelize = require("../database");
class Match extends Model {}
const matches = require("./matchData");

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    matchId: {
      type: DataTypes.STRING,
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
    comenceTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Match",
  }
);

Match.sync({ alter: true })
  .then(() => {
    console.log(matches);
    return Match.bulkCreate(matches);
  })
  .then((data) => {
    data.forEach((element) => {
      // console.log(element.toJSON());
    });
  })
  .catch((err) => {
    console.error("There was an error:", err);
  });

module.exports = Match;
