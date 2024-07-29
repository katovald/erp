const express = require("express");
const {
  createEmployee,
  getEmployees,
} = require("../controllers/humanResourcesController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/humanResources", authMiddleware, createEmployee);
router.get("/humanResources", authMiddleware, getEmployees);

module.exports = router;
