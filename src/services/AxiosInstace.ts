import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:7073/api"; // Default fallback

const baseAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseAxiosInstance;
