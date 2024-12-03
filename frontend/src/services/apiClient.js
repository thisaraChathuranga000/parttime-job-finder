import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
});

const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
    return;
  }
};

export { apiClient, setAuthToken };
