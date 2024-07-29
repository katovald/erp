const express = require("express");
const {
  createOrder,
  getOrders,
} = require("../controllers/productionController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/production", authMiddleware, createOrder);
router.get("/production", authMiddleware, getOrders);

module.exports = router;
