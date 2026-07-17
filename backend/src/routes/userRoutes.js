const express = require("express");
const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const {
  getMentors,
  getCurrentUser,
  getDashboardStats,
  updateProfile,
} = require(
  "../controllers/userController"
);

router.get(
  "/me",
  protect,
  getCurrentUser
);

router.get(
  "/dashboard",
  protect,
  getDashboardStats
);

router.get(
  "/mentors",
  getMentors
);

router.put(
  "/:id",
  protect,
  updateProfile
);

module.exports = router;