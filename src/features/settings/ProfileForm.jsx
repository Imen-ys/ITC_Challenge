
export default function ProfileForm() {
    return (
        <div className="bg-white rounded-xl shadow p-6 w-full">

        <h2 className="text-lg font-semibold mb-6">
            Personal Information
        </h2>


        <div className="flex items-center gap-4 mb-6">

            <img
            src="https://i.pravatar.cc/80"
            className="w-20 h-20 rounded-full"
            />

            <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Upload New
            </button>

            <button className="text-red-500">
                Remove
            </button>
            </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
            <InputField label="First Name" value="Alex" />
            <InputField label="Last Name" value="Stanton" />
        </div>

        <div className="mb-4">
            <InputField
            label="Email Address"
            value="alex.stanton@example.com"
            />
        </div>

        <div className="mb-6">
            <label className="text-sm text-gray-600">Bio</label>

            <textarea
            placeholder="Tell us a bit about yourself..."
            className="w-full border rounded-lg p-3 mt-1 h-24 focus:ring-2 focus:ring-blue-500 outline-none"
            />
        </div>

        <div className="flex justify-between items-center">

            <span className="text-sm text-gray-400">
            Last updated 2 days ago
            </span>

            <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg">
                Cancel
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Save Changes
            </button>
            </div>

        </div>

        </div>
    );
    }
    function InputField({ label, value, placeholder }) {
    return (
        <div className="flex flex-col gap-1 w-full">
        <label className="text-sm text-gray-600">{label}</label>

        <input
            defaultValue={value}
            placeholder={placeholder}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
    );
}