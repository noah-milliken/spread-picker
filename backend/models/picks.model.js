const pool = require("./db");

exports.getAll = async () => {
  const [result] = await pool.query(`
  SELECT * FROM picks
    `);
  return result;
};
exports.getByWeek = async (week) => {
  const [result] = await pool.query(
    `
    SELECT * FROM picks
    WHERE week_number = ?
    `,
    week
  );
  return result;
};

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

exports.make = async (pick, user_id, week_number, match_id) => {
  const [existingRecord] = await pool.query(
    `
  SELECT * FROM picks 
  WHERE user_id = ? AND week_number = ? AND match_id = ?
  `,
    [user_id, week_number, match_id]
  );
  if (existingRecord.length > 0) {
    const [result] = await pool.query(
      `
    UPDATE picks
    SET user_pick = ?
    WHERE user_id = ? AND week_number = ? AND match_id = ?
    `,
      [pick, user_id, week_number, match_id]
    );
    return result;
  } else {
    const [result] = await pool.query(
      `
    INSERT INTO picks (user_pick, user_id, week_number, match_id)
    VALUES  (?,?,?,?)
    `,
      [pick, user_id, week_number, match_id]
    );
    return result;
  }
};
