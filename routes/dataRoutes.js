require("dotenv").config();
const express = require("express");
const dataRoute = express.Router();
const { myCategories, myStore } = require("../models/Category");



dataRoute.get("/api/data/category", async function (req, res) {
  const data = await myCategories.find().exec();
  res.json(data);
});
dataRoute.get("/api/data/stores", async function (req, res){
  const data = await myStore.find().exec();
  res.json(data);
})

module.exports = dataRoute;
