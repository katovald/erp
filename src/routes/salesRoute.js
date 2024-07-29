const express = require("express");
const { createOrder, getOrders } = require("../controllers/salesController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/sales", authMiddleware, createOrder);
router.get("/sales", authMiddleware, getOrders);

module.exports = router;
