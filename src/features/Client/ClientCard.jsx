import {Link} from "react-router-dom";
export default function ClientCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="flex items-center gap-4">

          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            className="w-20 h-20 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold">
              Johnathan Doe
            </h2>

            <p className="text-sm text-gray-500">
              ID: #88291-A
            </p>

            <p className="text-sm text-gray-500">
              Last visit: Oct 24, 2023
            </p>

            <p className="text-sm text-blue-600">
              Blood Type: O+
            </p>
          </div>

        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border">
                <Link to="edit-client">Edit</Link>
          </button>

        </div>

      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-6 text-sm">

        <div>
          <p className="text-gray-400">Full Name</p>
          <p className="font-medium">Johnathan Doe</p>
        </div>

        <div>
          <p className="text-gray-400">Phone</p>
          <p className="font-medium">+1 (555) 012-3456</p>
        </div>

        <div>
          <p className="text-gray-400">Age</p>
          <p className="font-medium">42 years</p>
        </div>

        <div>
          <p className="text-gray-400">Address</p>
          <p className="font-medium">123 Maple St</p>
        </div>

      </div>

    </div>
  );
}