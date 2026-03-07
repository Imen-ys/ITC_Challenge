import { useState } from "react";

export default function AddAppointment() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [appointments, setAppointments] = useState({});
    const [patientName, setPatientName] = useState("");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const changeMonth = (direction) => {
        const newDate = new Date(year, month + direction, 1);
        setCurrentDate(newDate);
        setSelectedDate(null);
    };

    const saveAppointment = () => {
        if (!selectedDate || !patientName) return;

        const key = `${year}-${month + 1}-${selectedDate}`;

        setAppointments({
        ...appointments,
        [key]: patientName,
        });

        setPatientName("");
    };

    const monthName = currentDate.toLocaleString("default", { month: "long" });

    return (
        <div className="min-h-screen bg-blue-50 p-8 w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
            Doctor Appointment Calendar
        </h1>

        <div className="flex items-center justify-between mb-6 max-w-xl">
            <button
            onClick={() => changeMonth(-1)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
            Prev
            </button>

            <h2 className="text-xl font-semibold text-blue-700">
            {monthName} {year}
            </h2>

            <button
            onClick={() => changeMonth(1)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
            Next
            </button>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-8 max-w-xl">
            {days.map((day) => {
            const key = `${year}-${month + 1}-${day}`;

            return (
                <div
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`cursor-pointer bg-white rounded-xl shadow p-4 text-center hover:scale-105 transition
                ${selectedDate === day ? "border-2 border-blue-600" : ""}`}
                >
                <p className="font-semibold text-blue-700">{day}</p>

                {appointments[key] && (
                    <p className="text-sm text-gray-600 mt-2">
                    {appointments[key]}
                    </p>
                )}
                </div>
            );
            })}
        </div>

        {selectedDate && (
            <div className="max-w-md bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-700">
                Add Appointment - {selectedDate} {monthName}
            </h2>

            <input
                type="text"
                placeholder="Patient Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full border rounded-lg p-2"
            />

            <button
                onClick={saveAppointment}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
                Save Appointment
            </button>
            </div>
        )}
        </div>
    );
    }