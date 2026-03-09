    import axios from "axios";

    const API_URL = "http://127.0.0.1:8000/api/users/doctor/patients/add/";

    export const AddClient = async (clientData) => {
    try {
    console.log("Data sent to API:", clientData);

        const response = await axios.post(API_URL, clientData, {
        headers: {
            "Content-Type": "application/json"
        }
        });
        return response.data ;

    } catch (error) {
        throw error.response?.data || { message: "Client creation failed" };
    }
    };