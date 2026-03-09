import { Bell, MoreVertical } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h2 className="font-semibold text-gray-700">Patient Directory</h2>

      <div className="flex items-center gap-4">
        <Bell size={20} className="text-gray-500" />
        <MoreVertical size={20} className="text-gray-500" />
      </div>
    </header>
  );
}
