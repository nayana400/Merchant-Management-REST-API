console.log("Category Routes Loaded");

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Category Route Working");
});

const authMiddleware = require("../middleware/authMiddleware");
const {
  createCategory,
} = require("../controllers/categoryController");

router.post("/", authMiddleware, createCategory);

module.exports = router;