const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  getMentors,
  updateProfile,
} = require("../controllers/userController");

router.get("/mentors", getMentors);
router.put("/:id", updateProfile);
router.put("/:id", protect, updateProfile);
module.exports = router;