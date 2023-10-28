const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
//routes
const matchesRoutes = require("./routes/matches.routes");
const picksRoutes = require("./routes/picks.routes");
app.use(cors());
app.use(bodyparser.json());

app.use("/matches", matchesRoutes);
app.use("/picks", picksRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});
