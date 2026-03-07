import { AddAppointment , Sidebar} from "../features/script"
import { Nav } from "../ui/script";
function NewAppointment() {
  return (
    <>
        < Nav />
    <div className="flex">
        <Sidebar />
        <AddAppointment />
    </div>
    </>
    
  )
}

export default NewAppointment