import API from "./api";

export const register = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await API.post("/auth/login", userData);

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};