import { Bell } from "lucide-react";
import { MessageButton } from "../script";
export default function ClientVueHeader() {
  return (
    <div className="bg-white border-b p-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold">
        Patient Record
      </h1>

      <div className="flex items-center gap-4">

        <input
          placeholder="Search patient data..."
          className="bg-gray-100 px-4 py-2 rounded-lg outline-none w-64 hidden md:block"
        />

        <Bell className="text-gray-600" />
        <MessageButton />
      </div>
    </div>
  );
}