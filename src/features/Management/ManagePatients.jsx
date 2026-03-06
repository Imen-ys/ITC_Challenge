

export default function ManagePatients() {
  return (
    <div className="flex  bg-gray-100">


      <div className="flex-1 flex flex-col">


        <div className="p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Manage Patients
              </h1>
              <p className="text-gray-500">
                Total active records: 1,284 patients
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
              + Add Client
            </button>

          </div>



        </div>
      </div>

    </div>
  );
}