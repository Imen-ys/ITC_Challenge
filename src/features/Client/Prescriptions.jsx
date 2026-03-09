export default function Prescriptions() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mr-3">

      <h3 className="font-semibold mb-4">
        Prescriptions
      </h3>

      <ul className="space-y-3 text-sm">

        <li>
          <p className="font-medium">
            Lisinopril 10mg
          </p>
          <p className="text-gray-500">
            Once daily - 30 days remaining
          </p>
        </li>

        <li>
          <p className="font-medium">
            Atorvastatin 20mg
          </p>
          <p className="text-gray-500">
            Once daily - 15 days remaining
          </p>
        </li>

      </ul>

    </div>
  );
}