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

exports.join = async (league_name, user_id, league_id) => {
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
