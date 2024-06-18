import axios from 'axios';
import React, { useState, useEffect } from "react";
import Tab from "../../components/Tabs";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Link, useNavigate } from 'react-router-dom';

export default function EventSetting() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentUser, setCurrentUser] = useState({});
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); 
        }
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

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://localhost:3000/events', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      setEvents(response.data);
    }).catch(error => {
      console.error(error);
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      axios.delete(`http://localhost:3000/events/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(() => {
        fetchEvents();
      }).catch(error => {
        console.error("An error occurred while deleting the event:", error);
      });
    }
  };

  const counts = {
    All: events.length,
    Publish: events.filter((event) => event.category === "Publish").length,
    Draft: events.filter((event) => event.category === "Draft").length,
    Trash: events.filter((event) => event.category === "Trash").length,
  };

  const filteredEvents =
    activeTab === "All"
      ? events
      : events.filter((event) => event.category === activeTab);

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
            {["All", "Publish", "Draft", "Trash"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded focus:outline-none ${
                  activeTab === tab ? "text-blue-500" : "text-gray-700"
                }`}
              >
                {tab} ({counts[tab]})
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mt-5 pl-2">
            <div className="flex space-x-4 items-center">
              <select className="px-4 py-2 rounded shadow-custom-shadow bg-white">
                <option value="">Bulk Action</option>
                <option value="delete">Delete</option>
                <option value="archive">Archive</option>
              </select>
              <button className="px-4 py-2 rounded shadow-custom-shadow bg-white">Apply</button>
              <select className="px-4 py-2 rounded shadow-custom-shadow bg-white">
                <option value="">Filter</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <Link to="/add_event">
              <button className="px-4 py-2 rounded ml-auto bg-white shadow-custom-shadow">
                + Add Event
              </button>
            </Link>
          </div>
          <div className="mt-5 space-y-4 pl-2">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-start p-4 rounded-lg shadow-custom-shadow space-x-4 bg-white"
              >
                <img
                  src={`http://localhost:3000/uploads/${event.event_picture}`} 
                  alt={event.event_name}
                  className="w-36 h-36 object-cover rounded-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
                />
                <div className="flex-1 flex flex-col space-y-2">
                  <div className="flex flex-row space-x-4">
                    <div className="flex-1">
                      <span className="text-lg font-bold block">Event Name</span>
                      <p className="text-sm text-gray-600 pt-5">{event.event_name}</p>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-bold block">Event Description</span>
                      <p className="text-sm text-gray-600 break-words pt-5">{event.event_description}</p>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-bold block">Event Date</span>
                      <p className="text-sm text-gray-600 break-words pt-5">
                        {new Date(event.event_date_start).toLocaleDateString()} - {new Date(event.event_date_end).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-bold block">Action</span>
                      <div className="flex space-x-2 mt-2 pt-4">
                        <Link to={`/edit_event/${event.id}`}>
                          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Edit
                          </button>
                        </Link>
                      </div>
                      <div className="flex space-x-2 mt-2 pt-1">
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </div>
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
