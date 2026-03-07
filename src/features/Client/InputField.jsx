export default function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}