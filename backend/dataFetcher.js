// dotenv import
require("dotenv").config();

const axios = require("axios");
const API_KEY = process.env.ODDS_API;

const getOddsData = async () => {
  try {
    const response = await axios.get(
      `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds?apiKey=${API_KEY}&regions=us&markets=spreads&dateFormat=iso&oddsFormat=american&bookmakers=fanduel`
    );

    const responseData = response.data;
    const gamesArray = responseData;
    console.log(gamesArray);
    const gamesObj = gamesArray.map((item) => {
      const game = {
        weekNumber: 6,
        comenceTime: item.commence_time,
        homeTeam: item.home_team,
        awayTeam: item.away_team,
        spread: item.bookmakers[0].markets[0].outcomes[0].point,
      };
      return game;
    });

    console.log(JSON.stringify(gamesObj));
    console.log("Remaining requests", response.headers["x-requests-remaining"]);
    return JSON.stringify(gamesObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getOddsData };
