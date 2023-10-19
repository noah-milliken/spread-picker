const { Sequelize, Model, DataTypes } = require("sequelize");
//const sequelize = require("../database");
class User extends Model {}
const sequelize = new Sequelize("spread-picker-schema", "root", "squeak207", {
  dialect: "mysql",
});

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 18,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);
User.sync({ alter: true })
  .then(() => {
    // const user = User.create({
    //   username: "PernHatesFoorball",
    //   password: "iLoveBananas",
    //   age: 34,
    // });
    // return user.save();
  })
  .then((data) => {
    // console.log("user successfullt added to the database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = User;
