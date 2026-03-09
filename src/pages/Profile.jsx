import { useState, useEffect } from "react";
import { HeaderProfile, PersonnelInfromation, Sidebar } from "../features/script";
import { ProfileApi } from "../Services/ProfileApi";

export default function Profile() {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const loadDoctor = async () => {
      try {
        const data = await ProfileApi();
        setDoctor(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDoctor();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-blue-50 p-10 flex justify-center items-start">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full">
          
          {/* Show loading only for profile content */}
          {!doctor ? (
            <div className="p-10 text-center text-gray-500">Loading profile...</div>
          ) : (
            <>
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

                <p className="text-gray-600 leading-relaxed">
                  {doctor.about}
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Edit Profile
                </button>

                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                  View Appointments
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}