import {   Nav } from "../ui/script";
import { Sidebar } from "../features/script";
import { Header , PersonalInfo , MessageButton , DrClient} from "../features/script";
function ClientDashboard() {
  return (
    <div>
        {/* < Nav /> */}
        <div className="flex">
            <Sidebar />
            
        <div >
            <Header />
            <DrClient />
        </div>
        <PersonalInfo />
        <MessageButton />

      </div>
    </div>
  )
}

export default ClientDashboard