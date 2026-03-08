export default function Vitals() {
  const data = [
    { label: "Heart Rate", value: "72 bpm" },
    { label: "BP", value: "128/82" },
    { label: "Weight", value: "184 lbs" },
    { label: "Temp", value: "98.6 °F" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[70px] ml-3">

      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl shadow-sm text-center"
        >
          <p className="text-gray-400 text-sm">
            {item.label}
          </p>

          <p className="text-lg font-semibold">
            {item.value}
          </p>
        </div>
      ))}

    </div>
  );
}