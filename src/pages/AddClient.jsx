import { AddClientForm , Sidebar } from "../features/script";
import { Nav } from "../ui/script";
function AddClient() {
    return (
        <div>
        <Nav />
        <div className="flex w-full gap-2">
        <Sidebar />
        <AddClientForm />
        </div>

        </div>
    )
}

export default AddClient