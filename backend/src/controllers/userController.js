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

// Get featured mentors
const getFeaturedUsers = async (req, res) => {
  try {
    const mentors = await User.find(
      { role: "mentor" },
      "-password"
    )
      .limit(4)
      .sort({ createdAt: -1 });

    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get mentor/user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get logged-in user profile
const getProfile = async (req, res) => {
  try {
    res.status(200).json(req.user);
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
      {
        new: true,
      }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Request = require("../models/Request");

const getDashboard = async (req, res) => {
  try {
    const user = req.user;

    const requests = await Request.find({
      $or: [
        { learner: user._id },
        { mentor: user._id }
      ]
    })
      .populate("learner", "name")
      .populate("mentor", "name");

    res.status(200).json({
      user,
      requests,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMentors,
  getProfile,
  updateProfile,
  getDashboard,
  getFeaturedUsers,
  getUserById,
};