require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const router = require("./routes/routes");
const bodyparser = require("body-parser");
const sequelize = require("./database");

const { getOddsData } = require("./dataFetcher");

//express app
const app = express();

//middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
sequelize.sync().then(() => console.log("db is ready for data!"));

//getOddsData();
app.use(router);

app.get("/", (req, res) => {
  console.log("I am a banana");
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("listening on port", process.env.PORT);
});
