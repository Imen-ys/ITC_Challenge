import {    Nav} from "../ui/script";
import { EditClientForm , Sidebar } from "../features/script";
function EditClientPage() {
    return (
        <div>
            <Nav />
            <div className="flex">
                <Sidebar />
                <EditClientForm />
            </div>
        </div>
    )
}

export default EditClientPage