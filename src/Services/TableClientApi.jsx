import { useState, useEffect } from "react";
import PatientTable from "../features/Management/PatientTable/PatientTable";

export default function TableClientApi() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = "https://api.example.com/patients";

        const Tab = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Failed to fetch patients");
            const data = await response.json();
            setPatients(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        TableClientApi();
    }, []);

    if (loading) return <p className="text-center mt-6">Loading patients...</p>;
    if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;

    return <PatientTable patients={patients} />;
}