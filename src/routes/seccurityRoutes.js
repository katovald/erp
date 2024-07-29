const express = require("express");
const {
  createOrder,
  getOrders,
} = require("../controllers/seccurityController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/seccurity", authMiddleware, createOrder);
router.get("/seccurity", authMiddleware, getOrders);

module.exports = router;
