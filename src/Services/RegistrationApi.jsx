import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/users/register/";

export const RegestrationApi = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};