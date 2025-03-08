import axios from "axios";

const API_BASE_URL = "https://taskly-app-q35u.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
