import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

export default function ClientForm() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Client</h1>

      <div className="grid md:grid-cols-2 gap-4">

        <InputField label="Full Name" placeholder="Johnathan Doe" />

        <InputField label="Phone Number" placeholder="+213 073 456 789" />

        <div className="md:col-span-2">
          <InputField label="Address" placeholder="123 Business Ave, Suite 100" />
        </div>

        <InputField label="Age" placeholder="28" />

      </div>

      <div className="mt-4">
        <TextAreaField
          label="Additional Notes"
          placeholder="Enter any specific preferences, historical data, or internal comments..."
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="text-gray-500 hover:text-black">
          Cancel
        </button>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
          Create Client Profile
        </button>
      </div>

    </div>
  );
}