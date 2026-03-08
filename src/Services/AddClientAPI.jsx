    import axios from "axios";

    const API_URL = "http://localhost:5000/api/clients";

    export const AddClient = async (clientData) => {
    try {

        const response = await axios.post(API_URL, clientData, {
        headers: {
            "Content-Type": "application/json"
        }
        });

        return response.data;

    } catch (error) {
        throw error.response?.data || { message: "Client creation failed" };
    }
    };