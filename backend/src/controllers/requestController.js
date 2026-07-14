const Request = require("../models/Request");

const createRequest = async (req, res) => {
  try {
    const request = await Request.create(req.body);

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find()
      .populate("learner", "name email")
      .populate("mentor", "name email");

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
                status: req.body.status
            },
            {
                new: true
            }
        );

        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createRequest,
    getRequests,
    updateRequestStatus
};