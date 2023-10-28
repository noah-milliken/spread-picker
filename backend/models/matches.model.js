const pool = require("./db");

exports.getWeeks = async () => {
  const [weeks] = await pool.query(`
    SELECT * FROM matches
  `);
  return weeks;
};

exports.getWeekByNum = async (weekNum) => {
  const [week] = await pool.query(
    `
        SELECT * FROM matches
        WHERE week_num = ? 
        `,
    [weekNum]
  );
  //console.log(week);
  return week;
};
