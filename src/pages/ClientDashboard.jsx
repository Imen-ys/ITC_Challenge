import { Sidebar } from "../features/script";
import { Header , PersonalInfo  , DrClient , MedicationCard} from "../features/script";
function ClientDashboard() {
  return (
    <div>
        <div className="flex bg-gray-100">
            <Sidebar />

        <div >
            <Header />
            <div className="flex">
            <DrClient />
            <PersonalInfo />
            </div>
<div className="grid md:grid-cols-2 gap-4 mt-4 ml-4">

                <MedicationCard
                  name="Lisinopril"
                  dose="10mg • Once daily"
                  status="ACTIVE"
                />

                <MedicationCard
                  name="Amoxicillin"
                  dose="500mg • Twice daily"
                  status="3 DAYS LEFT"
                />

                <MedicationCard
                  name="Vitamin D3"
                  dose="2000 IU • Once daily"
                  status="OTC"
                />

              </div>
              </div>


      </div>
    </div>
  )
}

export default ClientDashboard