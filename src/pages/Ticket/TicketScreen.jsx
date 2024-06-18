import React, { useEffect, useState } from 'react';
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import TicketOverview from "./TicketOverview";
import SettingTicket from "./TicketSetting";
import TicketReport from "./ReportTicket";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const TicketScreen = () => {
    const [isHaveData, setIsHaveData] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const navigate = useNavigate();

    const handleAddData = () => {
        // Logika untuk menambah data bisa ditambahkan di sini
        setIsHaveData(true);
    };
     
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    const [currentUser, setCurrentUser] = useState({});
    
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:3000/auth/currentUser', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setCurrentUser(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchUser();
    }, [navigate]);

    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={currentUser} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-10 space-y-5 bg-[#F8F8F8] h-screen">
                        <div className="flex flex-row items-center space-x-5 text-start ml-[260px] mt-[120px] border-b border-gray-300">
                            <h1
                                className={`cursor-pointer ${activeTab === 'overview' ? 'px-4 py-2 text-green-700 border-b-2 border-green-700' : 'px-4 py-2 text-gray-600'}`}
                                onClick={() => handleTabChange('overview')}
                            >
                                Overview
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeTab === 'setting' ? 'px-4 py-2 text-green-700 border-b-2 border-green-700' : 'px-4 py-2 text-gray-600'}`}
                                onClick={() => handleTabChange('setting')}
                            >
                                Setting Ticket
                            </h1>
                            <h1
                                className={`cursor-pointer ${activeTab === 'report' ? 'px-4 py-2 text-green-700 border-b-2 border-green-700' : 'px-4 py-2 text-gray-600'}`}
                                onClick={() => handleTabChange('report')}
                            >
                                Report
                            </h1>
                        </div>
                        <div className="content">
                            {activeTab === 'overview' && <TicketOverview />}
                            {activeTab === 'setting' && <SettingTicket />}
                            {activeTab == 'report' && <TicketReport />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketScreen;