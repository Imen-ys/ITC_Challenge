import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditClient() {

    const location = useLocation();
    const navigate = useNavigate();

    const patient = location.state;

    const [form, setForm] = useState({
        name: patient?.name || "",
        email: patient?.email || "",
        phone: patient?.phone || "",
        visit: patient?.visit || "",
        status: patient?.status || ""
    });

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Updated Patient:", form);

        navigate("/management");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6 w-full">

        <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Edit Patient
            </h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

            <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div>
                <label className="text-sm text-gray-600">Last Visit</label>
                <input
                type="date"
                name="visit"
                value={form.visit}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Status</label>

                <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                <option>Stable</option>
                <option>Critical</option>
                <option>Recovering</option>
                </select>

            </div>

            <div className="md:col-span-2 flex gap-4 mt-4">

                <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                Save Changes
                </button>

                <button
                type="button"
                onClick={() => navigate(-1)}
                className="border px-6 py-2 rounded-lg hover:bg-gray-100"
                >
                Cancel
                </button>

            </div>

            </form>

        </div>

        </div>
    );
}