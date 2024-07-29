const express = require("express");
const {
  createOrder,
  getOrders,
} = require("../controllers/productionController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/purchase", authMiddleware, createOrder);
router.get("/purchase", authMiddleware, getOrders);

module.exports = router;
