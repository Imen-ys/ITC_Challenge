import axios from "axios";

const API_URL = "https://fakestoreapi.com/auth/login";

export const LoginAPI = async (email, password) => {
    try {
        const response = await axios.post(API_URL, {
        email: email,
        password: password,
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || "Login failed";
    }
};