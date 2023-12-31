const pool = require("./db");

exports.getAll = async () => {
  try {
    const [result] = await pool.query(`
    SELECT * FROM leagues
    `);
    return result;
  } catch (error) {
    console.error("Error in league.getAll:", error.memssate);
    throw error;
  }
};
exports.make = async (league_name, league_owner) => {
  try {
    const league = await pool.query(
      `
      INSERT INTO leagues(league_name, league_owner)
      VALUES(?, ?)
             `,
      [league_name, league_owner]
    );
    const owner = await pool.query(
      `
      INSERT INTO league_users(league_name, user_id)
      VALUES(?, ?)
    `,
      [league_name, league_owner]
    );

    return { league, owner };
  } catch (error) {
    console.error("Error in league.owner:", error.message);
    throw error;
  }
};
// TODO: return error if user has already joined league.
exports.join = async (league_name, user_id, league_id) => {
  console.log("user", user_id);
  try {
    const member = await pool.query(
      `
      INSERT INTO league_users(league_name, user_id, league_id)
      VALUE(?, ?, ?)
      `,
      [league_name, user_id, league_id]
    );
    return member;
  } catch (error) {
    console.error("Error in league.join:", error.message);
    throw error;
  }
};

exports.leave = async (league_name, user_id, league_id) => {
  try {
    const member = await pool.query(
      `
    DELETE FROM league_users
     WHERE league_name = ? 
     AND user_id = ? 
     AND league_id = ?;
    `,
      [league_name, user_id, league_id]
    );
    return member;
  } catch (error) {
    console.error("Error in leave leagues.leave:", error.message);
    throw error;
  }
};

exports.getJoinedByUser = async (user_id) => {
  try {
    const [memberships] = await pool.query(
      `
      SELECT  l.league_id, l.league_name, lu.user_id
      FROM leagues l
      JOIN league_users lu ON l.league_id = lu.league_id 
      WHERE lu.user_id = ?;
      `,
      [user_id]
    );
    console.log(memberships);
    return memberships;
  } catch (error) {
    console.error("Error in leagues.getJoinedByUser:", error.message);
    throw error;
  }
};
exports.exists = async (league_name) => {
  try {
    const [leagues] = await pool.query(
      `
        SELECT * From leagues
        Where league_name = ? 
      `,
      [league_name]
    );
    return leagues.length > 0;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.hasUser = async (league_id, user_id) => {
  console.log(user_id);
  try {
    const [users] = await pool.query(
      `
      SELECT * from league_users
      WHERE league_id = ? and user_id = ?
      `,
      [league_id, user_id]
    );
    console.log(users);
    return users.length > 0;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
