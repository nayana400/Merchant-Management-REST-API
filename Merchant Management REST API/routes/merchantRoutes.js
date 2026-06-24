console.log("Merchant Routes Loaded");
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createMerchant,
  getAllMerchants,
  getSingleMerchant,
  updateMerchant,
  deleteMerchant,
} = require("../controllers/merchantController");

router.post("/", authMiddleware, createMerchant);

router.get("/", authMiddleware, getAllMerchants);

router.get("/:id", authMiddleware, getSingleMerchant);

router.patch("/edit/:id", authMiddleware, updateMerchant);

router.delete("/:id", authMiddleware, deleteMerchant);

module.exports = router;