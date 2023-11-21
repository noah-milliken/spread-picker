const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const errorHandler = require("./errorHandler");
const app = express();
//routes
const matchesRoutes = require("./routes/matches.routes");
const userRoutes = require("./routes/user.routes");
const leaguesRoutes = require("./routes/leagues.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/matches", matchesRoutes);
app.use("/users", userRoutes);
app.use("/leagues", leaguesRoutes);
app.use("/dashboard", dashboardRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});
