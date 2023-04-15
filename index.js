require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./models/Category");
const route = require("./routes/authRoutes");
require("./services/passport");
const cors = require("cors");
const dataRoute = require("./routes/dataRoutes");

const app = express();

app.use(cors({ origin: process.env.FRONTEND_END_POINT, credentials: true }));
mongoose.connect(process.env.mongoURL);
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.sessionKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(route);
app.use(dataRoute);

app.listen(process.env.PORT);
