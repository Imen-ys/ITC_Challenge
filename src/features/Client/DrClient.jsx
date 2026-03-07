export default function DrClient() {
  return (
    <div className="bg-white rounded-xl p-6 shadow">

      <h3 className="font-semibold mb-4">Upcoming Appointment</h3>

      <div className="flex flex-col md:flex-row gap-6">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-40 h-40 rounded-lg object-cover"
        />

        <div className="flex-1 space-y-2">

          <h4 className="text-lg font-semibold">
            Dr. Sarah Mitchell
          </h4>

          <p className="text-gray-500">
            Senior Cardiologist • General Consultation
          </p>

          <div className="flex gap-6 mt-3 text-sm text-gray-600">
            <span>📅 Oct 24, 2023</span>
            <span>⏰ 10:30 AM</span>
          </div>

          <p className="text-gray-500">📍 Building B, Room 402</p>

          <button className="mt-3 px-4 py-2 bg-gray-100 rounded-lg">
            Reschedule
          </button>

        </div>

      </div>

    </div>
  );
}