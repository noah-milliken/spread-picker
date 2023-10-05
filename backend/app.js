require("dotenv").config();

const express = require("express");
const gamesRoutes = require("./routes/games");

//express app
const app = express();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

let games = [
  {
    homeTeam: "Vikings",
    awayTeam: "Packers",
    spread: "-3.5",
  },
  {
    homeTeam: "Giants",
    awayTeam: "Cowboys",
    spread: "+2.5",
  },
  {
    homeTeam: "Patriots",
    awayTeam: "Bills",
    spread: "-6.5",
  },
  {
    homeTeam: "Chiefs",
    awayTeam: "Ravens",
    spread: "-4.5",
  },
  {
    homeTeam: "Steelers",
    awayTeam: "Browns",
    spread: "+1.5",
  },
  {
    homeTeam: "Seahawks",
    awayTeam: "49ers",
    spread: "-2.5",
  },
  {
    homeTeam: "Rams",
    awayTeam: "Cardinals",
    spread: "-3.5",
  },
  {
    homeTeam: "Buccaneers",
    awayTeam: "Saints",
    spread: "-5.5",
  },
  {
    homeTeam: "Titans",
    awayTeam: "Colts",
    spread: "+3.5",
  },
  {
    homeTeam: "Bears",
    awayTeam: "Lions",
    spread: "-1.5",
  },
  {
    homeTeam: "Chargers",
    awayTeam: "Broncos",
    spread: "+2.5",
  },
  {
    homeTeam: "Dolphins",
    awayTeam: "Jets",
    spread: "-6.5",
  },
  {
    homeTeam: "Falcons",
    awayTeam: "Panthers",
    spread: "+1.5",
  },
  {
    homeTeam: "Texans",
    awayTeam: "Jaguars",
    spread: "-3.5",
  },
  {
    homeTeam: "Raiders",
    awayTeam: "Dolphins",
    spread: "+4.5",
  },
  {
    homeTeam: "Washington",
    awayTeam: "Eagles",
    spread: "-2.5",
  },
];

app.use(gamesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listeining on port`, process.env.PORT);
});
