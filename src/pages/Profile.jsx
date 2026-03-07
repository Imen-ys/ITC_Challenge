import { useState } from "react";
import { HeaderProfile, PersonnelInfromation, Sidebar } from "../features/script";

export default function Profile() {
  const [doctor] = useState({
    name: "Dr. itc",
    specialty: "UGK",
    phone: "+1 555 123 456",
    email: "doctor@email.com",
    experience: "12 Years",
    hospital: "City Medical Clinic",
    about:
      "Experienced cardiologist specializing in heart disease prevention, diagnosis, and treatment. Dedicated to providing compassionate care for all patients.",
  });

  return (
    <div className="flex">
    <Sidebar />
    <div className="min-h-screen bg-blue-50 flex justify-center items-start p-10 w-full">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full">
        <HeaderProfile doctor={doctor} />

        <div className="grid grid-cols-2 gap-6 mt-6">
          <PersonnelInfromation label="Phone" value={doctor.phone} />
          <PersonnelInfromation label="Email" value={doctor.email} />
          <PersonnelInfromation label="Experience" value={doctor.experience} />
          <PersonnelInfromation label="Specialty" value={doctor.specialty} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            About the Doctor
          </h2>
          <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
            View Appointments
          </button>
        </div>
      </div>
    </div>
    
    
    </div>

  );
}
