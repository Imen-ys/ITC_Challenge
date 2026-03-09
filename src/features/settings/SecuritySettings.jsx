export default function SecuritySettings() {
    return (
        <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
            Security
        </h3>

        <div className="flex flex-col gap-4">
            <input
            type="password"
            placeholder="Current Password"
            className="border p-2 rounded"
            />

            <input
            type="password"
            placeholder="New Password"
            className="border p-2 rounded"
            />

            <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded"
            />
        </div>
        </div>
    );
}