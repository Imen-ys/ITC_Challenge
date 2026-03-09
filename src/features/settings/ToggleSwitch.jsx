import { useState } from "react";

export default function ToggleSwitch() {
    const [enabled, setEnabled] = useState(true);

    return (
        <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
            enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
        >
        <div
            className={`bg-white w-4 h-4 rounded-full transform transition ${
            enabled ? "translate-x-6" : ""
            }`}
        />
        </button>
    );
}