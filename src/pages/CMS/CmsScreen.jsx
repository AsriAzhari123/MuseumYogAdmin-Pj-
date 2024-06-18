import React, { useEffect, useState } from 'react';
import MuseumInformation from "./MuseumInfo";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import PlusIcon from "/src/assets/icons/Plus.png";
import { Link } from "react-router-dom";
import ImageTesting from "/src/assets/image-test.png";
import MuseumCollectionScreen from "./MuseumCollection";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const SampleData = {
    namaMuseum: 'Museum Keraton Ngayogyakarta Hadiningrat',
    gambarMuseum: [ImageTesting, ImageTesting, ImageTesting],
    alamatMuseum: 'Jl. Rotowijayan, Kadipaten, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55132',
    operasionalMuseum: {
        waktu: 'Buka setiap hari: 08.00 - 13.30 WIB',
        keterangan: 'Khusus hari jumat: 08.00 - 13.00 WIB dan Libur pada upacara kebesaran Keraton',
    },
    fasilitasMuseum: ["Toilet duduk dan jongkok", "Mushola"],
    transportMuseum: [
        { transportName: "Stasiun Yogyakarta", jarak: "200m" },
        { transportName: "Stasiun Lempuyangan", jarak: "300m" },
    ],
};

const CmsScreen = () => {
    const [isHaveData, setIsHaveData] = useState(false);
    const [activeTab, setActiveTab] = useState('information');
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    const handleAddData = () => {
        // Logika untuk menambah data bisa ditambahkan di sini
        setIsHaveData(true);
    };
     
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

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
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-10 space-y-5 bg-[#F8F8F8]">
                    <div className="grid grid-cols-2 text-center ml-[260px] mt-[120px] flex border-b border-gray-300">
                        <h1
                            className={`cursor-pointer ${activeTab === 'information' ? 'px-4 py-2 text-green-700 border-b-2 border-green-700' : 'px-4 py-2 text-gray-600'}`}
                            onClick={() => handleTabChange('information')}
                        >
                            Museum Information
                        </h1>
                        <h1
                            className={`cursor-pointer ${activeTab === 'collection' ? 'px-4 py-2 text-green-700 border-b-2 border-green-700' : 'px-4 py-2 text-gray-600'}`}
                            onClick={() => handleTabChange('collection')}
                        >
                            Museum Collection
                        </h1>
                    </div>
                    <div className="content">
                        {!isHaveData ? (
                            <div className="w-full bg-white mb-[50px] p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center space-y-10">
                                <h1 className="text-black font-bold text-[20px]">
                                    You don’t have any information about the museum
                                </h1>
                                <Link to="/add_information" onClick={handleAddData}>
                                    <div className="flex flex-row justify-center items-center space-x-5">
                                        <img src={PlusIcon} alt="" className="w-[24px] h-[24px]" />
                                        <button>
                                            Add Museum Information
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        ) : (
                            <>
                                {activeTab === 'information' && <MuseumInformation data={SampleData} />}
                                {activeTab === 'collection' && <MuseumCollectionScreen />}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default CmsScreen;
