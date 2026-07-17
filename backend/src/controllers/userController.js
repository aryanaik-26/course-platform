const User = require("../models/User");
const Request = require("../models/Request");

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

// Get current logged in user
const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Dashboard statistics
const getDashboardStats = async (
  req,
  res
) => {
  try {
    const user = req.user;

    let totalRequests = 0;
    let acceptedRequests = 0;
    let pendingRequests = 0;
    let rejectedRequests = 0;

    if (user.role === "mentor") {
      totalRequests =
        await Request.countDocuments({
          mentor: user._id,
        });

      acceptedRequests =
        await Request.countDocuments({
          mentor: user._id,
          status: "accepted",
        });

      pendingRequests =
        await Request.countDocuments({
          mentor: user._id,
          status: "pending",
        });

      rejectedRequests =
        await Request.countDocuments({
          mentor: user._id,
          status: "rejected",
        });
    } else {
      totalRequests =
        await Request.countDocuments({
          learner: user._id,
        });

      acceptedRequests =
        await Request.countDocuments({
          learner: user._id,
          status: "accepted",
        });

      pendingRequests =
        await Request.countDocuments({
          learner: user._id,
          status: "pending",
        });

      rejectedRequests =
        await Request.countDocuments({
          learner: user._id,
          status: "rejected",
        });
    }

    res.status(200).json({
      totalRequests,
      acceptedRequests,
      pendingRequests,
      rejectedRequests,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update profile
const updateProfile = async (
  req,
  res
) => {
  try {
    const updatedUser =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).select("-password");

    res.status(200).json(
      updatedUser
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMentors,
  getCurrentUser,
  getDashboardStats,
  updateProfile,
};