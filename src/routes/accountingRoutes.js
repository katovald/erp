const express = require("express");
const {
  createOrder,
  getOrders,
} = require("../controllers/accountingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/accounting", authMiddleware, createOrder);
router.get("/accounting", authMiddleware, getOrders);
