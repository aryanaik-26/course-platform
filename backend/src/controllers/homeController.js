const User = require("../models/User");

const getHomeData = async (req, res) => {
  try {
    const featuredMentors = await User.find(
      { role: "mentor" },
      "-password"
    )
      .limit(4)
      .sort({ rating: -1 });

    const mentorCount = await User.countDocuments({
      role: "mentor",
    });

    const learnerCount = await User.countDocuments({
      role: "learner",
    });

    const skillSet = new Set();

    const users = await User.find({}, "skillsOffered");

    users.forEach((user) => {
      user.skillsOffered.forEach((skill) => {
        skillSet.add(skill);
      });
    });

    const categories = [
      {
        title: "Programming",
        description: "Web, App & Software Development",
        icon: "FaLaptopCode",
      },
      {
        title: "Graphic Design",
        description: "UI/UX, Photoshop & Branding",
        icon: "FaPaintBrush",
      },
      {
        title: "Photography",
        description: "Photo & Video Editing",
        icon: "FaCamera",
      },
      {
        title: "Music",
        description: "Guitar, Piano & Singing",
        icon: "FaMusic",
      },
      {
        title: "Cooking",
        description: "Baking & Professional Cooking",
        icon: "FaUtensils",
      },
      {
        title: "Fitness",
        description: "Yoga & Personal Training",
        icon: "FaDumbbell",
      },
      {
        title: "Artificial Intelligence",
        description: "Machine Learning & AI",
        icon: "FaRobot",
      },
      {
        title: "Languages",
        description: "English & Foreign Languages",
        icon: "FaLanguage",
      },
    ];

    res.json({
      mentors: featuredMentors,
      categories,
      stats: {
        mentors: mentorCount,
        learners: learnerCount,
        skills: skillSet.size,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getHomeData,
};