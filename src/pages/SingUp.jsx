import {Nav} from "../ui/script"
import { Register , LeftSide } from "../features/script"
function SingUp() {
    return (
        <>
        <Nav />
        <div className="flex flex-1 items-center justify-center p-6">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
                <LeftSide />
                <Register />
            </div>
        </div>
        </>

    )
}

export default SingUp