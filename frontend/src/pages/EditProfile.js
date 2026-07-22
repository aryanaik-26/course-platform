import React, { useEffect, useState } from "react";
import "./EditProfile.css";

import {
  getProfile,
  updateProfile,
} from "../services/userService";

function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePicture: "",
    location: "",
    experience: "",
    skillsOffered: "",
    skillsWanted: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const user = await getProfile();

      setFormData({
        name: user.name || "",
        bio: user.bio || "",
        profilePicture: user.profilePicture || "",
        location: user.location || "",
        experience: user.experience || "",
        skillsOffered:
          user.skillsOffered?.join(", ") || "",
        skillsWanted:
          user.skillsWanted?.join(", ") || "",
      });

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const updated = {
        ...formData,
        skillsOffered: formData.skillsOffered
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),

        skillsWanted: formData.skillsWanted
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      const updatedUser =
        await updateProfile(user._id, updated);

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      alert("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="edit-profile-page">

      <div className="edit-profile-card">

        <h1>Edit Profile</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="profilePicture"
            placeholder="Profile Image URL"
            value={formData.profilePicture}
            onChange={handleChange}
          />

          <textarea
            name="bio"
            placeholder="Bio"
            rows="5"
            value={formData.bio}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skillsOffered"
            placeholder="React, Node, Java"
            value={formData.skillsOffered}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skillsWanted"
            placeholder="AI, ML"
            value={formData.skillsWanted}
            onChange={handleChange}
          />

          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProfile;