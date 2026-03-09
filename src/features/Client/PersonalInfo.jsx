export default function PersonalInfo() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4 ">

      <h3 className="font-semibold">Personal Information</h3>

      <div className="text-sm text-gray-600">
        <p><b>Full Name:</b> Alex Mitchell Johnson</p>
        <p><b>Phone:</b> +1 (555) 234-8901</p>
        <p><b>Address:</b> 128 Oak Street, San Francisco</p>
        <p><b>Blood Type:</b> O+</p>
      </div>

      <button className="text-blue-600 text-sm">
        Download Patient Card
      </button>

    </div>
  );
}