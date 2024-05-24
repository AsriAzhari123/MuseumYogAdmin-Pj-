import React, {useState} from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import UserSampleAccount from "../../dataSample/UserAccount";
import TicketOverview from "./TicketOverview";


const TicketScreen = () => {
    const [isHaveData, setIsHaveData] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const handleAddData = () => {
        // Logika untuk menambah data bisa ditambahkan di sini
        setIsHaveData(true);
    };
     
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={UserSampleAccount[0]} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-10 space-y-5 bg-[#F8F8F8] h-screen">
                        <div className="flex flex-row items-center space-x-5 text-start ml-[260px] mt-[120px] border-b-4 border-gray-300">
                            <h1
                                className={`text-[20px] font-bold cursor-pointer pb-6 relative w-[200px] ${activeTab === 'overview' ? 'border-b-4 border-[#728969] text-[#728969] top-[4px]' : ''}`}
                                onClick={() => handleTabChange('overview')}
                            >
                                Overview
                            </h1>
                            <h1
                                className={`text-[20px] font-bold cursor-pointer pb-6 relative w-[200px] ${activeTab === 'setting' ? 'border-b-4 border-[#728969] text-[#728969] top-[4px]' : ''}`}
                                onClick={() => handleTabChange('setting')}
                            >
                                Setting Event
                            </h1>
                            <h1
                                className={`text-[20px] font-bold cursor-pointer pb-6 relative w-[200px] ${activeTab === 'report' ? 'border-b-4 border-[#728969] text-[#728969] top-[4px]' : ''}`}
                                onClick={() => handleTabChange('report')}
                            >
                                Report
                            </h1>
                        </div>
                        <div className="content">
                            {activeTab === 'overview' && <TicketOverview />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketScreen;