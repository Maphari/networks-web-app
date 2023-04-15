const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  category: String,
  rating: Number,
  description: String,
});

const storeSchema = new Schema({
  storeName: String,
  category: String,
  rating: Number,
  description: String,
  storeImage: String,
});

const myStore = mongoose.model("store", storeSchema);
const myCategories = mongoose.model("category", categoriesSchema);

module.exports = {
  myStore: myStore,
  myCategories: myCategories,
};
