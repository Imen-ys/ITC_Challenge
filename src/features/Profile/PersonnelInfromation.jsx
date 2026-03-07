
function PersonnelInfromation({ label, value }) {
  return (
    <div className="bg-blue-50 p-4 rounded-xl">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  )
}

export default PersonnelInfromation