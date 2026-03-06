import { LayoutDashboard, Users, Calendar, Mail, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r">
      <div className="p-6 font-bold text-lg">HealthPortal</div>

      <nav className="flex flex-col gap-2 px-4">
        <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <LayoutDashboard size={18} /> Dashboard
        </a>

        <a className="flex items-center gap-3 p-3 rounded-lg bg-blue-600 text-white">
          <Users size={18} /> Patients
        </a>

        <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <Calendar size={18} /> Appointments
        </a>

        <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <Mail size={18} /> Messages
        </a>

        <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
          <Settings size={18} /> Settings
        </a>
      </nav>

      <div className="mt-auto p-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          + New Appointment
        </button>
      </div>
    </aside>
  );
}
