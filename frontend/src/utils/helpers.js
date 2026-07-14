// ================================
// Format Rating
// ================================

export const formatRating = (rating) => {
  return Number(rating).toFixed(1);
};

// ================================
// Capitalize First Letter
// ================================

export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// ================================
// Search Mentors by Skill
// ================================

export const searchMentors = (mentors, searchText) => {
  if (!searchText) return mentors;

  return mentors.filter((mentor) =>
    mentor.skill.toLowerCase().includes(searchText.toLowerCase())
  );
};

// ================================
// Filter Mentors by Category
// ================================

export const filterByCategory = (mentors, category) => {
  if (!category || category === "All Categories") {
    return mentors;
  }

  return mentors.filter(
    (mentor) =>
      mentor.skill.toLowerCase() === category.toLowerCase()
  );
};

// ================================
// Sort Mentors by Rating
// ================================

export const sortByRating = (mentors) => {
  return [...mentors].sort((a, b) => b.rating - a.rating);
};

// ================================
// Sort by Experience
// ================================

export const sortByExperience = (mentors) => {
  return [...mentors].sort(
    (a, b) =>
      parseInt(b.experience) - parseInt(a.experience)
  );
};

// ================================
// Get Mentor by ID
// ================================

export const getMentorById = (mentors, id) => {
  return mentors.find(
    (mentor) => mentor.id === Number(id)
  );
};

// ================================
// Generate Random Color
// ================================

export const randomColor = () => {
  const colors = [
    "#6366F1",
    "#8B5CF6",
    "#EC4899",
    "#14B8A6",
    "#3B82F6",
    "#F59E0B",
    "#10B981",
    "#EF4444",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

// ================================
// Format Session Count
// ================================

export const formatSessions = (sessions) => {
  return `${sessions}+ Sessions`;
};

// ================================
// Greeting Based on Time
// ================================

export const greeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning ☀️";
  if (hour < 17) return "Good Afternoon 🌤️";
  return "Good Evening 🌙";
};

// ================================
// Dummy Delay (for loading screens)
// ================================

export const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));