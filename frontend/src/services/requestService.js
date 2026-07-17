import API from "./api";

export const createRequest = async (requestData) => {
  const response = await API.post(
    "/requests",
    requestData
  );

  return response.data;
};

export const getRequests = async () => {
  const response = await API.get("/requests");

  return response.data;
};

export const updateRequestStatus = async (
  id,
  status
) => {
  const response = await API.put(
    `/requests/${id}`,
    { status }
  );

  return response.data;
};