import API from "./api";

export const getMentors = async () => {
  const response = await API.get(
    "/users/mentors"
  );

  return response.data;
};

export const getCurrentUser =
  async () => {
    const response =
      await API.get("/users/me");

    return response.data;
  };

export const getDashboardStats =
  async () => {
    const response =
      await API.get(
        "/users/dashboard"
      );

    return response.data;
  };