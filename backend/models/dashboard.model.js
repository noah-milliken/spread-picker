const pool = require("./db");

exports.getStandings = async (user_id, week_number) => {
  try {
    const [leagueIds] = await pool.query(
      `
        SELECT 
        league_id,
        league_name
      FROM league_users
      WHERE user_id = ?;
        `,
      [user_id]
    );
    console.log(leagueIds);
    const leagueStandings = await Promise.all(
      leagueIds.map(async (league) => {
        const [standings] = await pool.query(
          `
          SELECT
          u.user_name,
          l.user_id,
          SUM(p.correct_pick) AS total_correct_picks
      FROM league_users l
      JOIN picks p ON p.user_id = l.user_id
      JOIN users u ON u.user_id = l.user_id
      WHERE l.league_id = ? AND p.week_number = ?
      GROUP BY l.user_id, u.user_name
      order by total_correct_picks DESC;
      `,
          [league.league_id, week_number]
        );
        return { [league.league_name]: standings };
      })
    );
    return leagueStandings;
  } catch (error) {
    console.error("Error in getStandings:", error);
    throw error;
  }
};
