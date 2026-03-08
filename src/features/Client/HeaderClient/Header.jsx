import { Bell } from "lucide-react";
import {MessageButton} from "../../script";
export default function Header() {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mx-4 w-full">

      <div className="m-4">
        <h2 className="text-2xl font-bold">Welcome back, Alex</h2>
        <p className="text-gray-500">Everything looks great with your health today.</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 bg-white rounded-lg shadow">
          <Bell size={18} />
        </button>
<MessageButton />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + New Appointment
        </button>
      </div>

    </div>
  );
}