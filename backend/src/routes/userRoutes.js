const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getMentors,
  getFeaturedUsers,
  getUserById,
  getProfile,
  updateProfile,
} = require("../controllers/userController");

// Public Routes
router.get("/mentors", getMentors);
router.get("/featured", getFeaturedUsers);

// Protected Route
router.get("/profile", protect, getProfile);

// User Details
router.get("/:id", getUserById);

// Update Profile
router.put("/:id", protect, updateProfile);

module.exports = router;