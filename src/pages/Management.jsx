import { useState, useEffect } from "react";
import { Sidebar, SearchBar, PatientTable, ManagePatients } from "../features/script";
import { Nav } from "../ui/script";

export default function Management() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Nav />
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