require("dotenv").config();

const svd = require("sportsdataverse");
const express = require("express");
const gamesRoutes = require("./routes/games");
const mongoose = require("mongoose");

async function getSchedule() {
  const result = await svd.nfl.getWeeklySchedule(1, 2032, 2);
  return result;
}
const result = svd.nfl.getWeeklySchedule(
  (week = 16),
  (year = 2023),
  (seasonType = 2)
);

const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
//express app
const app = express();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(gamesRoutes);

// connest to db
mongoose.connect(URI).then(() => {
  app.listen(PORT, () => {
    console.log("listening on port", process.env.PORT);
    console.log(getSchedule());
  });
});

// listen for requests
