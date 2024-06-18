import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Tab from '../../components/Tabs';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const events = [
  {
    image: "https://th.bing.com/th/id/OIP.sMkJCOUl_aqN4ZF67pVtEQHaE9?rs=1&pid=ImgDetMain",
    name: "Event Name",
    deskname: "Workshop Membatik",
    titleDesk: "Event Description",
    description: "Dalam Event ini anda akan diajak untuk belajar teknik-teknik membatik, mulai dari menyiapkan kain hingga menciptakan pola dan warna yang unik.",
    titleDate: "Event Date",
    date: "2024-06-01",
    status: "On Going",
    titleStatus: "Event Status",
    category: "Publish"
  },
  {
    image: "https://www.britishmuseum.org/sites/default/files/styles/uncropped_small/public/2019-10/Great-Court-Corporate-Entertaining-Autumnal.jpg?itok=sYGq6wOU",
    name: "Event Name",
    deskname: "Workshop Membatik",
    titleDesk: "Event Description",
    description: "Dalam Event ini anda akan diajak untuk belajar teknik-teknik membatik, mulai dari menyiapkan kain hingga menciptakan pola dan warna yang unik.",
    titleDate: "Event Date",
    date: "2024-07-15",
    status: "Done",
    titleStatus: "Event Status",
    category: "Draft"
  },
  {
    image: "https://th.bing.com/th/id/OIP.4Nb7RV7udINo1zsxbyIU9wHaE8?rs=1&pid=ImgDetMain",
    name: "Event Name",
    deskname: "Workshop Membatik",
    titleDesk: "Event Description",
    description: "Dalam Event ini anda akan diajak untuk belajar teknik-teknik membatik, mulai dari menyiapkan kain hingga menciptakan pola dan warna yang unik.",
    titleDate: "Event Date",
    date: "2024-07-15",
    status: "Coming Soon",
    titleStatus: "Event Status",
    category: "Trash"
  },
];

export default function EventOverview() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

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

  const counts = {
    All: events.length,
    Publish: events.filter(event => event.category === 'Publish').length,
    Draft: events.filter(event => event.category === 'Draft').length,
    Trash: events.filter(event => event.category === 'Trash').length,
  };

  const filteredEvents = activeTab === 'All' ? events : events.filter(event => event.category === activeTab);

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        user={currentUser}
        className="h-16 bg-gray-800 text-white flex items-center px-4"
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-4 overflow-y-auto ml-[280px] mt-16 pt-10 bg-[#F8F8F8]">
          <Tab />
          <h1 className="text-2xl font-bold pl-3 pt-5">Events</h1>
          <div className="flex space-x-4 pl-3 pt-3">
            {['All', 'Publish', 'Draft', 'Trash'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded focus:outline-none ${activeTab === tab ? 'text-blue-500' : 'text-gray-700'}`}
              >
                {tab} ({counts[tab]})
              </button>
            ))}
          </div>
          <div className="flex items-center mt-5 space-x-4 pl-2">
            <select className="px-4 py-2 border rounded shadow-custom-shadow">
              <option value="">Bulk Action</option>
              <option value="delete">Delete</option>
              <option value="archive">Archive</option>
            </select>
            <button className="px-4 py-2 border rounded shadow-custom-shadow bg-white">Apply</button>
            <select className="px-4 py-2 border rounded shadow-custom-shadow">
              <option value="">Filter</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="mt-5 space-y-4 pl-2">
            {filteredEvents.map((event, index) => (
              <div key={index} className="flex items-start p-4 rounded-lg shadow-custom-shadow space-x-4">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-36 h-36 object-cover rounded-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
                />
                <div className="flex-1 flex flex-col space-y-2">
                  <div className="flex flex-row space-x-4">
                    <div className="flex-1">
                      <span className="text-lg font-bold block">{event.deskname}</span>
                      <p className="text-sm text-gray-600 pt-10">{event.name}</p>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-bold block">{event.titleDesk}</span>
                      <p className="text-sm text-gray-600 break-words pt-5">{event.description}</p>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-bold block">{event.titleDate}</span>
                      <p className="text-sm text-gray-600 break-words pt-10">{event.date}</p>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-bold block">{event.titleStatus}</span>
                      <span className={`text-sm font-semibold block ${event.status === 'On Going' ? 'text-green-500' : event.status === 'Done' ? 'text-blue-500' : 'text-gray-500'}`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
