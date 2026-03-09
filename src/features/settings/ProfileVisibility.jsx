import ToggleSwitch from "./ToggleSwitch";
import { Globe } from "lucide-react";

export default function ProfileVisibility() {
    return (
        <div className="bg-white rounded-xl shadow p-6 w-full">

        <div className="flex justify-between items-center mb-4">

            <div>
            <h3 className="font-semibold">
                Profile Visibility
            </h3>

            <p className="text-sm text-gray-500">
                Control who can see your profile details and activity.
            </p>
            </div>

            <ToggleSwitch />

        </div>

        <div className="flex items-center gap-3 mt-4">

            <Globe size={18} />

            <span>Public Profile</span>

            <span className="ml-auto text-blue-600 text-sm">
            Enabled
            </span>

        </div>

        </div>
    );
}