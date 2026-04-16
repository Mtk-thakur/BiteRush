const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// CREATE
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Order.findByIdAndUpdate(req.params.id, req.body);
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;