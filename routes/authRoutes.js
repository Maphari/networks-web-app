require("dotenv").config();
const express = require("express");
const passport = require("passport");
const route = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GOOGLE AUTH ROUTEAS
route.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
route.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_END_POINT + "/home",
    failureRedirect: process.env.FRONTEND_END_POINT + "/login",
  })
);
route.get("/api/auth/google_succsess", (req, res) => {
  if (req.user) res.json({ user: req.user, message: "User authenticated" });
  else res.json({ user: null, message: "User not authenticated" });
});

// CREATE NEW USER WITH EMAIL AN PASS WORD
route.post("/api/signup_user", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      const newUser = await new User({
        clientID: null,
        email: email,
        password: password,
      });
      const token = jwt.sign({ userId: newUser._id }, process.env.MY_SECRET, {
        expiresIn: "24h",
      });
      if (newUser.clientID === undefined) return null;
      else newUser.clientID = token;
      const session = (req.session.user = token);
      await newUser.save();
      req.session.user = {
        clientID: session,
        id: newUser._id,
        email: newUser.email,
      };
      res.status(200).json({
        message: "Account created successfully",
        session: req.session.user,
      });
    } else if (user) {
      const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
        expiresIn: "24h",
      });
      const session = (req.session.user = token);
      req.session.user = {
        clientID: session,
        id: user._id,
        email: user.email,
      };
      res.status(200).json({
        exist: true,
        message: "User already exists",
        session: req.session.user,
      });
    }
  } catch (error) {
    res.status(401).json({ errorMessage: `ERROR: ${error.message}` });
  }
});

// CREATE NEW USER WITH EMAIL AN PASS WORD
route.post("/api/signin_user", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ exist: false, errorMessage: "user not found" });
    }

    // compparing password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.json({ errorMessage: "password does not match" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
      expiresIn: "24h",
    });

    const session = (req.session.user = token);
    res
      .status(200)
      .json({ message: "Login successful", user: user, session: session });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = route;
