export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col justify-between">
      
      <div>
        <div className="p-6 font-bold text-xl">
          Nexus Admin
        </div>

        <nav className="space-y-2 px-4">

          <SidebarItem label="Dashboard" />
          <SidebarItem label="Profile" active />
          <SidebarItem label="Appointments" />
          <SidebarItem label="Settings" />

        </nav>

        <div className="mt-6 border-t pt-4 px-4">
          <SidebarItem label="Settings" />
        </div>
      </div>

      <div className="p-4 flex items-center gap-3 border-t">
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium"> PiLI PILI</p>
          <p className="text-xs text-gray-500">Admin Account</p>
        </div>
      </div>

    </aside>
  );
}

function SidebarItem({ label, active }) {
  return (
    <div
      className={`px-4 py-2 rounded-lg cursor-pointer text-sm
      ${active ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
    >
      {label}
    </div>
  );
}