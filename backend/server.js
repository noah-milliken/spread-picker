require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");

//express app
const app = express();

//middleware

app.get("/", (req, res) => {
  console.log("I am a banana");
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("listening on port", process.env.PORT);
});
