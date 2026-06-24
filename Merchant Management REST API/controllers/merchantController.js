const Merchant = require("../models/Merchant");

// Add Merchant
const createMerchant = async (req, res) => {
  try {
    const merchant = await Merchant.create(req.body);
    res.status(201).json(merchant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Merchants
const getAllMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.find().populate("category");

    res.status(200).json(merchants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Merchant
const getSingleMerchant = async (req, res) => {
  try {
    const merchant = await Merchant.findById(
      req.params.id
    ).populate("category");

    if (!merchant) {
      return res.status(404).json({
        message: "Merchant not found",
      });
    }

    res.status(200).json(merchant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Merchant
const updateMerchant = async (req, res) => {
  try {
    const merchant =
      await Merchant.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!merchant) {
      return res.status(404).json({
        message: "Merchant not found",
      });
    }

    res.status(200).json(merchant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Merchant
const deleteMerchant = async (req, res) => {
  try {
    const merchant =
      await Merchant.findByIdAndDelete(
        req.params.id
      );

    if (!merchant) {
      return res.status(404).json({
        message: "Merchant not found",
      });
    }

    res.status(200).json({
      message: "Merchant deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMerchant,
  getAllMerchants,
  getSingleMerchant,
  updateMerchant,
  deleteMerchant,
};