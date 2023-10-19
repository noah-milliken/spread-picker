const { Model, DataTypes, Op } = require("sequelize");
const sequelize = require("../database");
class Picks extends Model {}

Picks.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    matchId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

// Picks.sync({ alter: true })
//   .then(() => {
//     Picks.create({
//       userId: 1,
//       matchId: "68b7be06e7590bd403fd52db5c1d1c35",
//       pick: "Buffalo Bills",
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("There was an error:", err);
//   });

module.exports = Picks;
