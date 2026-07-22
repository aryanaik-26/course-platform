import axios from "axios";

const API = "http://localhost:5000/api/users";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getMentors = async () => {
  const res = await axios.get(`${API}/mentors`);
  return res.data;
};

export const getProfile = async () => {
  const res = await axios.get(`${API}/profile`, authHeader());
  return res.data;
};

export const updateProfile = async (id, data) => {
  const res = await axios.put(`${API}/${id}`, data, authHeader());
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};

export const getFeaturedUsers = async () => {
  const res = await axios.get(`${API}/featured`);
  return res.data;
};

export const getHomeData = async () => {
  const res = await axios.get("http://localhost:5000/api/home");
  return res.data;
};