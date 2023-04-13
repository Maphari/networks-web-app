require("dotenv").config();
const express = require("express");
const passport = require("passport");
const route = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  if (req.session.user || req.user) {
    next();
  } else {
    res.json({ message: "notAllowed" });
  }
};

// GOOGLE AUTH ROUTEAS
route.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
route.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_END_POINT + "/dashboard",
    failureRedirect: process.env.FRONTEND_END_POINT + "/login",
  })
);

// SPOTIFY AUTH ROUTES
route.get(
  "/api/auth/spotify",
  passport.authenticate("spotify", {
    scope: ["user-read-email", "user-read-private"],
  })
);
route.get(
  "/api/auth/spotify/callback",
  passport.authenticate("spotify", {
    successRedirect: process.env.FRONTEND_END_POINT + "/dashboard",
    failureRedirect: process.env.FRONTEND_END_POINT + "/login",
  })
);

// ROUTER AFTER USER SUCCESS ON AUTHENTICATION
route.get("/api/auth/succsess", isAuthenticated, (req, res) => {
  if (req.isAuthenticated()) {
    res.json({user: req.user, message: "verified"})
  } else if(req.session.user) {
    res.json({user: req.session.user, message: "verified"})
  } else {
    res.json({message: "User not authenticated"})
  }
});

// CREATE NEW USER WITH EMAIL AN PASS WORD
route.post("/api/signup_user", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      const newUser = new User({
        clientID: null,
        name: username,
        email: email,
        password: password,
      });
      const token = jwt.sign({ userId: newUser._id }, process.env.MY_SECRET, {
        expiresIn: "24h",
      });
      newUser.clientID = token;
      req.session.user = {
        clientID: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      };
      await newUser.save();
      res.status(200).json({
        exist: false,
        message: "Account created successfully",
        session: token,
        user: newUser,
      });
    } else {
      user.name = username;
      const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
        expiresIn: "24h",
      });
      user.clientID = token;

      req.session.user = {
        clientID: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      };

      await user.save();
      res.status(200).json({
        exist: true,
        message: "Account updated successfully",
        session: token,
        user: user,
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
    req.session.user = {
      user: user,
      session: user?.clientID,
    };
    res.status(200).json({
      message: "Login successful",
      session: session,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = route;
