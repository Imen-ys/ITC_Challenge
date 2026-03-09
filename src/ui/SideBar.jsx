import { NavLink } from "react-router-dom";
import { ChatBot } from "../features/script";
const menuItems = [
  { label: "Dashboard", path: "/management" },
  { label: "Profile", path: "/profile" },
  { label: "Appointments", path: "/new-appointment" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col justify-between">
      
      <div>

        <div className="p-4 flex items-center gap-3 border-t">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div>
            <p className="text-sm font-medium">PiLI PILI</p>
            <p className="text-xs text-gray-500">Admin Account</p>
          </div>
        </div>

        <nav className="space-y-2 px-4 mt-4">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </nav>
      <ChatBot /> 
      </div>
    </aside>
  );
}

function SidebarItem({ label, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg text-sm transition
        ${
          isActive
            ? "bg-blue-100 text-blue-600"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}