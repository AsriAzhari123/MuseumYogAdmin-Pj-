import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import users from "../../dataSample/UserAccount"
import EditInfoEvent from "../../components/EditInfoEvent"

const EditEventScreen = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={users[1]} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <EditInfoEvent />
                </div>
            </div>
        </>
    )
}

export default EditEventScreen;