
function HeaderProfile({ doctor }) {
  return (
<div className="flex items-center gap-6 border-b pb-6">
          <img
            src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2"
            alt="Doctor"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          <div>
            <h1 className="text-3xl font-bold text-blue-700">
              {doctor.name}
            </h1>
            <p className="text-gray-600 text-lg">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">{doctor.hospital}</p>
          </div>
        </div>  )
}

export default HeaderProfile