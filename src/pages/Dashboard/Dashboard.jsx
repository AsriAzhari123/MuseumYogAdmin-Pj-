import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import DiagramBatang from '../../components/Barchart';
import DiagramLingkaran from '../../components/Circlechart';
import users from '../../dataSample/UserAccount';

const currentUser = users[1];

const events = [
  {
    name: "Workshop Membatik",
    status: "Finished",
    image:
      "https://www.metmuseum.org/-/media/images/join-and-give/host-an-event/corporate-receptions/teaser.jpg",
  },
  {
    name: "Workshop Membatik",
    status: "Finished",
    image:
      "https://www.metmuseum.org/-/media/images/join-and-give/host-an-event/corporate-receptions/teaser.jpg",
  },
  {
    name: "Workshop Membatik",
    status: "Finished",
    image:
      "https://www.metmuseum.org/-/media/images/join-and-give/host-an-event/corporate-receptions/teaser.jpg",
  },
  {
    name: "Workshop Membatik",
    status: "On Progress",
    image:
      "https://www.metmuseum.org/-/media/images/join-and-give/host-an-event/corporate-receptions/teaser.jpg",
  },
];

export default function Dashboard() {
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredEvents = events.filter(event => {
    if (filter === 'All') return true;
    return event.status === filter;
  });

  const sortedEvents = filteredEvents.sort((a, b) => {
    if (sortOrder === 'asc') return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        user={currentUser}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-4 overflow-y-auto ml-[280px] mt-16 pt-10 bg-[#F8F8F8]">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-custom-shadow">
              <h2 className="text-lg font-semibold mb-2">Total User</h2>
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-2">23</span>
              </div>
              <p className="text-green-700 font-semibold">
                + 32.54% from last month
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-custom-shadow">
              <h2 className="text-lg font-semibold mb-2">Total Ticket</h2>
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-2">23</span>
              </div>
              <p className="text-green-700 font-semibold">
                + 32.54% from last month
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-custom-shadow">
              <h2 className="text-lg font-semibold mb-2">Total Event</h2>
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-2">23</span>
              </div>
              <p className="text-green-700 font-semibold">
                + 32.54% from last month
              </p>
            </div>
            <div className="col-span-3 bg-white p-4 rounded-lg shadow-custom-shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Ticket Overview</h2>
              </div>
              <div className="h-64">
                <DiagramBatang />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-custom-shadow">
              <h2 className="text-lg font-semibold mb-2">Event Status</h2>
              <div className="flex justify-between mb-4">
                <select onChange={handleFilterChange} className="border p-2 rounded">
                  <option value="All">All</option>
                  <option value="Finished">Finished</option>
                  <option value="On Progress">On Progress</option>
                </select>
                <select onChange={handleSortChange} className="border p-2 rounded">
                  <option value="asc">Sort by Name: A-Z</option>
                  <option value="desc">Sort by Name: Z-A</option>
                </select>
              </div>
              {sortedEvents.map((event, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={event.image}
                    alt="Event"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center">
                      <p className="text-gray-700 font-semibold">Event</p>
                    </div>
                    <p className="text-gray-700">{event.name}</p>
                  </div>
                  <div className="ml-auto">
                    <button className="w-24 text-black text-base font-work-sans font-normal break-words">
                      {event.status}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-custom-shadow">
              <h2 className="text-lg font-semibold mb-2">Event Composition</h2>
              <div className="h-64">
                <DiagramLingkaran />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
