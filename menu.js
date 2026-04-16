const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  veg: Boolean
});

module.exports = mongoose.model("Menu", MenuSchema);