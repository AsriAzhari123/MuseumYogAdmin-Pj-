import React, { useState } from "react";
import Tab from "../../components/Tabs";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import users from "../../dataSample/UserAccount";
import { Link } from "react-router-dom";

const currentUser = users[1];

const events = [
    {
        image:
            "https://th.bing.com/th/id/OIP.4Nb7RV7udINo1zsxbyIU9wHaE8?rs=1&pid=ImgDetMain",
        name: "Event Name",
        deskname: "Workshop Membatik",
        titleDesk: "Event Description",
        description:
            "Dalam Event ini anda akan diajak untuk belajar teknik-teknik membatik, mulai dari menyiapkan kain hingga menciptakan pola dan warna yang unik.",
        titleDate: "Event Date",
        date: "02 Mei 2024 - 28 Mei 2024",
        category: "Trash",
    },
];

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
                <div className="flex-1 p-4 overflow-y-auto ml-[280px] mt-16 pt-10">
                    <Tab />
                    <h1 className="text-2xl font-bold pl-3 pt-5">Events</h1>
                    <div className="pt-5 pl-2">
                        <Link to="/add_report">
                            <button className="px-4 py-2 border rounded ml-auto">
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
                            <select className="px-4 py-2 border rounded">
                                <option value="">Bulk Action</option>
                                <option value="delete">Delete</option>
                                <option value="archive">Archive</option>
                                {/* Add more options as needed */}
                            </select>
                            <button className="px-4 py-2 border rounded">Apply</button>
                            <select className="px-4 py-2 border rounded">
                                <option value="">Filter</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                            {/* button kalender */}
                        </div>
                    </div>
                    <div className="mt-5 space-y-4 pl-2">
                        {filteredEvents.map((event, index) => (
                            <div
                                key={index}
                                className="flex items-start p-4 border rounded-lg shadow-sm space-x-4 bg-white"
                            >
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="w-36 h-36 object-cover rounded-lg"
                                />
                                <div className="flex-1 flex flex-col space-y-2">
                                    <div className="flex flex-row space-x-4">
                                        <div className="flex-1">
                                            <span className="text-lg font-bold block">
                                                {event.name}
                                            </span>
                                            <p className="text-sm text-gray-600 pt-2">
                                                {event.deskname}
                                            </p>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-lg font-bold block">
                                                {event.titleDesk}
                                            </span>
                                            <p className="text-sm text-gray-600 break-words pt-2">
                                                {event.description}
                                            </p>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-lg font-bold block">
                                                {event.titleDate}
                                            </span>
                                            <p className="text-sm text-gray-600 break-words pt-2">
                                                {event.date}
                                            </p>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-lg font-bold block">Action</span>
                                            <div className="flex space-x-2 mt-2 pt-2">
                                                <Link to="/edit_report">
                                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                        Edit
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="flex space-x-2 mt-2 pt-1">
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Event Participation Data */}
                        <div className="mt-4 pt-5 pl-2">
                            <h2 className="text-lg font-bold">Event Participant Data</h2>
                            <div className="overflow-x-auto mt-2 pt-3">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Events
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Amount
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Visit Schedule
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {participantData.map((participant, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{participant.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{participant.events}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{participant.amount}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{participant.visitSchedule}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
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
