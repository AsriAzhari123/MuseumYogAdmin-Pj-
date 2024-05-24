import React, { useState } from "react";
import MuseumInformation from "./MuseumInfo";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import PlusIcon from "/src/assets/icons/Plus.png";
import { Link } from "react-router-dom";
import ImageTesting from "/src/assets/image-test.png";
import MuseumCollectionScreen from "./MuseumCollection";

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
                <Navbar user={users[0]} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-10 space-y-5 bg-[#F8F8F8]">
                        <div className="grid grid-cols-2 text-center ml-[260px] mt-[120px] border-b-4 border-gray-300">
                            <h1
                                className={`text-[24px] font-bold cursor-pointer pb-6 relative ${activeTab === 'information' ? 'border-b-4 border-[#728969] text-[#728969] top-[4px]' : ''}`}
                                onClick={() => handleTabChange('information')}
                            >
                                Museum Information
                            </h1>
                            <h1
                                className={`text-[24px] font-bold cursor-pointer pb-6 relative ${activeTab === 'collection' ? 'border-b-4 border-[#728969] text-[#728969] top-[4px]' : ''}`}
                                onClick={() => handleTabChange('collection')}
                            >
                                Museum Collection
                            </h1>
                        </div>
                        <div className="content">
                            {activeTab === 'information' && <MuseumInformation data={SampleData} />}
                            {activeTab === 'collection' && <MuseumCollectionScreen />}
                        </div>
                    </div>
                </div>
            </div>
            {/* card for insert data */}
                    {/* {!isHaveData ? (
                        <div className="flex-1 p-10 overflow-y-auto ml-[280px] mt-16 pt-10">
                            <div className="flex flex-col space-y-5">
                                <h1 className="text-black font-bold text-[24px]">
                                    Museum Information
                                </h1>
                                <div className="w-full bg-white mb-[50px] p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center space-y-10">
                                    <h1 className="text-black font-bold text-[20px]">
                                        You don’t have any information about the museum
                                    </h1>
                                    <Link to={"/add_information"} onClick={handleAddData}>
                                        <div className="flex flex-row justify-center items-center space-x-5">
                                            <img src={PlusIcon} alt="" className="w-[24px] h-[24px]"/>
                                            <button
                                                onClick={handleAddData}
                                            >
                                                Add Museum Information
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ): (
                        <MuseumInformation data={SampleData} />
                    )} */}       
        </>
    );
};

export default CmsScreen;
