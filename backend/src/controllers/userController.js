const User = require("../models/User");

// Get all mentors
const getMentors = async (req, res) => {
  try {
    const mentors = await User.find(
      { role: "mentor" },
      "-password"
    );

    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update profile
const updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMentors,
  updateProfile,
};