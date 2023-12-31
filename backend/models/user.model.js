const AppError = require("../errors/Errors");
const pool = require("./db");

// Get all users
exports.getAll = async () => {
  try {
    const [result] = await pool.query(`
    SELECT * FROM users
      `);
    return result;
  } catch (error) {
    throw new AppError("Error fetching all users:", 500);
  }
};
// Get user by ID
exports.getUser = async (userId) => {
  const [result] = await pool.query(
    `
    SELECT
    u.user_name,
    u.user_id,
    u.first_name,
    u.last_name,
    p.correct_pick,
    p.week_number,
    p.updated_at
FROM users u
JOIN picks p ON u.user_id = p.user_id
WHERE u.user_id = ?;


    `,
    [userId]
  );
  return result;
};
exports.hasUser = async (userId) => {
  const [result] = await pool.query(
    `SELECT * FROM users
    WHERE user_id = ?
    `,
    [userId]
  );
  return result.length > 0;
};
//gets picks for the specified week
exports.getPicksByUserAndWeek = async (userId, week) => {
  console.log(userId, week);
  const [result] = await pool.query(
    `
        SELECT m.match_id , m.week_num, m.date, m.away_team, m.home_team, m.point_spread, m.away_id, m.home_id, m.home_score, m.away_score, m.winning_team, p.user_pick, p.user_id, COALESCE(p.week_number, 0) AS week_number, p.correct_pick
    FROM matches m
    LEFT JOIN picks p ON m.match_id = p.match_id AND p.week_number = ? AND (p.user_id = ? OR p.user_id IS NULL)
    WHERE m.week_num = ?;
    `,
    [week, userId, week]
  );
  console.log(result);
  return result;
};
//sets the user pick for match by week, matchid and user_id
exports.make = async (pick, user_id, week_number, match_id) => {
  console.log(match_id);
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
exports.getProfile = async (userId) => {
  const [result] = await pool.query(
    //errors for databasae can go here.
    `
    `
  );
};
// Checks the users picks against the matches results and sets correct_pick to 0 or 1
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
    SELECT sum(correct_pick) as total_correct from picks
    WHERE user_id = ? and week_number = ?;
  `,
    [user_id, week]
  );
  return result;
};

exports.getCorrect = async (user_id) => {
  console.log("Get Correct");
  const [result] = await pool.query(
    `
  SELECT sum(correct_pick) as total_correct from picks
  WHERE user_id = ? 
`,
    [user_id]
  );
  console.log(result);
  return result;
};
