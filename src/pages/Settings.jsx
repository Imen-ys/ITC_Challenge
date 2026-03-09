import {Nav} from '../ui/script'
import { Sidebar , SecuritySettings  , ProfileVisibility , ProfileForm} from '../features/script'
function Settings() {
    return (
        <div>
            <Nav />
            <div className="flex">
                <Sidebar />
                {/* <SecuritySettings /> */}
                <div className='w-full'>
                    <ProfileForm />
                    <ProfileVisibility />
                </div>
            </div>

        </div>
    )
}

export default Settings