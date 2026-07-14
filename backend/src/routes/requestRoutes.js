const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");


const {
    createRequest,
    getRequests,
    updateRequestStatus
} = require("../controllers/requestController");

router.put("/:id", protect, updateRequestStatus);
router.post("/", protect, createRequest);
router.get("/", protect, getRequests)
router.post("/", createRequest);
router.get("/", getRequests);

module.exports = router;