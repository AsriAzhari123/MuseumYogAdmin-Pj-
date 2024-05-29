import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import EditInformationProfile from "../../components/EditProfile";

const users = [
    {
        name: 'John Doe',
        email: 'jhon123@gmail.com',
        image: 'https://th.bing.com/th/id/OIP.w6Cs6qz234c71XloeqKdwgHaHa?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Jane Doe',
        email: 'jane123@gmail.com',
        image: 'https://th.bing.com/th/id/OIP.w6Cs6qz234c71XloeqKdwgHaHa?rs=1&pid=ImgDetMain'
    }
];

const EditProfileScreen = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={users[0]} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex flex-1 overflow-hidden bg-[#F8F8F8]">
                    <Sidebar />
                    <EditInformationProfile />
                </div>
            </div>
        </>
    )
}

export default EditProfileScreen;