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
exports.evaluate = async () => {
  console.log("working evaluate");
  const [result] = await pool.query(`
  SELECT 
    p.user_pick,
    p.user_id,
    p.week_number,
    p.correct_pick,
    m.winning_team,
    m.match_id
  FROM picks p
  JOIN matches m
    ON p.match_id = m.match_id
  `);
  result.forEach((pick) => {
    pick.correct_pick = pick.user_pick === pick.winning_team ? 1 : 0;
  });
  console.log(result);
  const updatePicks = await result.map((pick) => {
    pool.query(
      `
      UPDATE picks
      SET correct_pick = ? 
      WHERE user_id = ? and match_id =?
    `,
      [pick.correct_pick, pick.user_id, pick.match_id]
    );
  });
  await Promise.all(updatePicks);
};
exports.calculateCorrect = async (user_id, week) => {
  const [result] = await pool.query(
    `
  SELECT * FROM picks
  WHERE user_id = ? and week_number = ?
  `,
    [user_id, week]
  );
  const calculatedTotal = result.reduce((acc, pick) => {
    return acc + pick.correct_pick;
  }, 0);
  console.log(calculatedTotal);
  return { calculatedTotal: calculatedTotal };
};
