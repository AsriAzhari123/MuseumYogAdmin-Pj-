import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Building from "../assets/building.png";
import DashboardIcon from "../assets/icons/dashboard.png";
import Ticket from "../assets/icons/ticket.png";
import Events from "../assets/icons/events.png";
import CMS from "../assets/icons/cms.png";
import Review from "../assets/icons/review.png";

const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 w-[280px] bg-[#5B6D54] h-full flex flex-col pt-20'>
            <div className='text-white mb-4 px-4 py-2'>
                <div className="text-center mb-4 pt-10">
                    <img src={Building} alt="building" className="w-14 h-14 mb-4 mx-auto"/>
                    <h1 className='text-[24px] font-bold'>Museum</h1>
                    <h1 className='text-[24px] font-bold mb-4'>Keraton Yogyakarta</h1>
                </div>    
                <div className='flex items-center'>
                    <MdOutlineLocationOn className='w-8 h-8'/>
                    <h1 className='text-[12px] px-2'>Jl. Rotowijayan, Kadipaten, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55132</h1>
                </div>
            </div>
            <div className='bg-[#7F9275] flex-1 px-0 py-4'>
                <ul className='text-white font-bold space-y-2'>
                    <li className='rounded hover:shadow hover:bg-[#5B6D54] mx-4'>
                        <Link to="/dashboard" className='flex items-center p-2'>
                            <img src={DashboardIcon} alt="dashboard" className="w-6 h-6"/>
                            <h1 className='text-[16px] font-medium ml-4'>Dashboard</h1>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow hover:bg-[#5B6D54] mx-4'>
                        <Link to="/events" className='flex items-center p-2'>
                            <img src={Events} alt="events" className="w-6 h-6"/>
                            <h1 className='text-[16px] font-medium ml-4'>Events</h1>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow hover:bg-[#5B6D54] mx-4'>
                        <Link to="/ticket" className='flex items-center p-2'>
                            <img src={Ticket} alt="ticket" className="w-6 h-6 mt-1"/>
                            <h1 className='text-[16px] font-medium ml-4'>Ticket</h1>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow hover:bg-[#5B6D54] mx-4'>
                        <Link to="/cms" className='flex items-center p-2'>
                            <img src={CMS} alt="cms" className="w-6 h-6"/>
                            <h1 className='text-[16px] font-medium ml-4'>CMS</h1>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow hover:bg-[#5B6D54] mx-4'>
                        <Link to="/review" className='flex items-center p-2'>
                            <img src={Review} alt="review" className="w-6 h-6"/>
                            <h1 className='text-[16px] font-medium ml-4'>Review</h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
