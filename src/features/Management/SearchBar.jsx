import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mt-6 flex flex-col md:flex-row gap-4">

      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">

        <Search size={18} className="text-gray-400 mr-2" />

        <input
          type="text"
          placeholder="Search patients by name, ID or phone number..."
          className="bg-transparent outline-none w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
        <SlidersHorizontal size={18} />
        Filters
      </button>

    </div>
  );
}