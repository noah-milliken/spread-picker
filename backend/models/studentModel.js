const Sequelize = require("sequelize");
const { DataTypes, Model, Op } = Sequelize;
class Student extends Model {}

const sequelize = new Sequelize("spread-picker-schema", "root", "squeak207", {
  dialect: "mysql",
});

Student.init(
  {
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 20],
      },
    },
    favorite_class: {
      type: DataTypes.STRING(25),
      defaultValue: "Computer Science",
    },
    school_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_honors: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize, modelName: "Students" }
);

Student.sync()
  .then(() => {
    Student.findAll({
      where: {
        [Op.or]: {
          favorite_class: "Computer Science",
          is_honors: true,
        },
      },
    });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
