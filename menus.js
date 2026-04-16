const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

// GET all
router.get("/", async (req, res) => {
  const items = await Menu.find();
  res.json(items);
});

// ADD
router.post("/", async (req, res) => {
  const item = new Menu(req.body);
  await item.save();
  res.json(item);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;