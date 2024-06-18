import axios from 'axios';
import React, { useState, useEffect } from "react";
import Tab from "../../components/Tabs";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const participantData = [
    {
        name: "Asri",
        events: "WorkShop Membatik",
        amount: "2x",
        visitSchedule: "02 May 2024, 10:40 Am",
        status: "Paid Off",
    },
    {
        name: "Heidy",
        events: "WorkShop Membatik",
        amount: "1x",
        visitSchedule: "02 May 2024, 10:40 Am",
        status: "Paid Off",
    },
    {
        name: "Vadil",
        events: "WorkShop Membatik",
        amount: "1x",
        visitSchedule: "02 May 2024, 10:40 Am",
        status: "Paid Off",
    },
];

export default function ReportEvent() {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedDate, setSelectedDate] = useState('');
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
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
                    <div className="pt-5 pl-2">
                        <Link to="/add_report">
                            <button className="px-4 py-2 rounded ml-auto bg-white shadow-custom-shadow">
                                + Add Event
                            </button>
                        </Link>
                    </div>
                    <div className="flex space-x-4 pl-3 pt-3">
                        {["All", "Publish", "Draft", "Trash"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded focus:outline-none ${activeTab === tab ? "text-blue-500" : "text-gray-700"
                                    }`}
                            >
                                {tab} ({counts[tab]})
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center justify-between mt-5 pl-2">
                        <div className="flex space-x-4 items-center">
                            <select className="px-4 py-2 rounded bg-white shadow-custom-shadow">
                                <option value="">Bulk Action</option>
                                <option value="delete">Delete</option>
                                <option value="archive">Archive</option>
                                {/* Add more options as needed */}
                            </select>
                            <button className="px-4 py-2 rounded bg-white shadow-custom-shadow">Apply</button>
                            <select className="px-4 py-2 rounded bg-white shadow-custom-shadow">
                                <option value="">Filter</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                            {/* button kalender */}
                            <div className="flex space-x-4 items-center ml-auto bg-white shadow-custom-shadow">
                                <div className="px-4 py-2 rounded">
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        className="w-full text-gray-700 focus:outline-none placeholder:text-gray-700" />
                                </div>
                            </div>
                        </div>
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
                                            <div className="flex space-x-2 mt-2 pt-2">
                                                <Link to={`/edit_report/${event.id}`}>
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
                        {/* Event Participation Data */}
                        <div className="mt-4 px-5 py-5 bg-white shadow-custom-shadow rounded-[8px]">
                            <h2 className="text-lg font-bold">Event Participant Data</h2>
                            <div className="overflow-x-auto mt-2 pt-3">
                                <table className="min-w-full divide-y divide-gray-200 border-collapse border border-slate-700">
                                    <thead className="bg-[#C57557]">
                                        <tr className="text-white text-center">
                                            <th className="border border-slate-700 px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="border border-slate-700 px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                                                Events
                                            </th>
                                            <th className="border border-slate-700 px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                                                Amount
                                            </th>
                                            <th className="border border-slate-700 px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                                                Visit Schedule
                                            </th>
                                            <th className="border border-slate-700 px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {participantData.map((participant, index) => (
                                            <tr key={index}>
                                                <td className="border border-slate-700 px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {participant.name}
                                                    </div>
                                                </td>
                                                <td className="border border-slate-700 px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {participant.events}
                                                    </div>
                                                </td>
                                                <td className="border border-slate-700 px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {participant.amount}
                                                    </div>
                                                </td>
                                                <td className="border border-slate-700 px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {participant.visitSchedule}
                                                    </div>
                                                </td>
                                                <td className="border border-slate-700 px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {participant.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
