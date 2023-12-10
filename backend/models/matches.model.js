const pool = require("./db");

exports.getWeeks = async () => {
  try {
    const [weeks] = await pool.query(`
    SELECT * FROM matches
  `);
    return weeks;
  } catch (error) {}
};

exports.getWeekByNum = async (weekNum) => {
  const [week] = await pool.query(
    `
        SELECT * FROM matches
        WHERE week_num = ? 
        `,
    [weekNum]
  );
  return week;
};

exports.calculateSpreadResult = async (weekNum) => {
  const [result] = await pool.query(
    `
    SELECT 
    m.match_id,
    m.away_team,
    m.home_team,
    m.point_spread,
    m.home_score,
    m.away_score,
    m.winning_team
    FROM matches m
    WHERE week_num = ?
  `,
    [weekNum]
  );
  result.forEach(async (match) => {
    let spreadWinner;
    let adjustedHomeScore = match.home_score;
    if (match.point_spread > 0) {
      adjustedHomeScore += match.point_spread;
    } else if (match.point_spread < 0) {
      adjustedHomeScore -= Math.abs(match.point_spread);
    }
    if (adjustedHomeScore > match.away_score) {
      spreadWinner = match.home_team;
    } else {
      spreadWinner = match.away_team;
    }
    if (spreadWinner) {
      await pool.query(
        `
          UPDATE matches
          SET winning_team = ?
          WHERE match_id = ? 
      `,
        [spreadWinner, match.match_id]
      );
    }
  });
  console.log(result);
};
