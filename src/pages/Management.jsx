import { useState } from "react";
import { Sidebar, Header, SearchBar, PatientTable , ManagePatients} from "../features/script";

const patientsData = [
  { name: "Alice Stevenson", email: "alice@example.com", id: "#P-9201", phone: "(555) 123-4567", visit: "Oct 24, 2023", status: "Stable" },
  { name: "Robert Miller", email: "r.miller@example.com", id: "#P-8842", phone: "(555) 987-6543", visit: "Nov 12, 2023", status: "Follow-up" },
  { name: "Katherine Hughes", email: "katie.h@example.com", id: "#P-7612", phone: "(555) 444-2211", visit: "Nov 15, 2023", status: "In Treatment" },
  { name: "David Thompson", email: "d.thompson@example.com", id: "#P-1055", phone: "(555) 777-8899", visit: "Nov 18, 2023", status: "Urgent" },
];

export default function Management() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patientsData.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full p-4">
          <ManagePatients />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <PatientTable patients={filteredPatients} />
        </div>
      </div>
    </>
  );
}