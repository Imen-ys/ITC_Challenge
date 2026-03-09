export default function MedicationCard({ name, dose, status }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow">

        <div className="flex justify-between items-center">

            <h4 className="font-semibold">
            {name}
            </h4>

            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
            {status}
            </span>

        </div>

        <p className="text-gray-500 text-sm mt-2">
            {dose}
        </p>

        </div>
    );
}