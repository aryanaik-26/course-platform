const Request = require("../models/Request");

const createRequest = async (req, res) => {
  try {
    const request = await Request.create({
      learner: req.body.learner,
      mentor: req.body.mentor,
      skill: req.body.skill,
      message: req.body.message,
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getRequests = async (req, res) => {
  try {
    const userId = req.user._id;
    const role = req.user.role;

    let requests;

    if (role === "mentor") {
      requests = await Request.find({
        mentor: userId,
      })
        .populate("learner", "name email")
        .populate("mentor", "name email");
    } else {
      requests = await Request.find({
        learner: userId,
      })
        .populate("learner", "name email")
        .populate("mentor", "name email");
    }

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateRequestStatus = async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRequest,
  getRequests,
  updateRequestStatus,
};