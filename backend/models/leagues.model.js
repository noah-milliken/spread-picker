const pool = require("./db");

exports.getAll = async () => {
  const [result] = await pool.query(`
    SELECT * FROM leagues
    `);
  return result;
};
exports.make = async (league_name, league_owner) => {
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
};

exports.join = async (league_name, user_id, league_id) => {
  const member = await pool.query(
    `
    INSERT INTO league_users(league_name, user_id, league_id)
    VALUE(?, ?, ?)
    `,
    [league_name, user_id, league_id]
  );
  return member;
};

exports.leave = async (league_name, user_id, league_id) => {
  const member = await pool.query(
    `
  DELETE FROM league_users
   WHERE league_name = ? 
   AND user_id = ? 
   AND league_id = ?;
  `,
    [league_name, user_id, league_id]
  );
};
