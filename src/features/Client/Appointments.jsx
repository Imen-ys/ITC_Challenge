export default function Appointments() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-[300px] mr-3">

      <h3 className="font-semibold mb-4">
        Appointments
      </h3>

      <div className="space-y-4 text-sm">

        <div>
          <p className="font-medium">
            Follow-up Consultation
          </p>
          <p className="text-gray-500">
            Nov 12, 2023 • 10:30 AM
          </p>
        </div>

        <div>
          <p className="font-medium">
            Cardiovascular Screening
          </p>
          <p className="text-gray-500">
            Oct 24, 2023
          </p>
        </div>

        <div>
          <p className="font-medium">
            Initial Consultation
          </p>
          <p className="text-gray-500">
            Aug 30, 2023
          </p>
        </div>

      </div>

    </div>
  );
}