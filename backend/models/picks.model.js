const pool = require("./db");

exports.getByWeekAndUser = async (week, user) => {
  const [result] = await pool.query(
    `
    SELECT * FROM picks
    WHERE week_number = ? and user_id = ?
    `,
    [week, user]
  );

  return result;
};
