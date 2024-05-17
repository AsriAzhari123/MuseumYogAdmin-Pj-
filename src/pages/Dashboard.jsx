import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Barchart from '../components/Barchart';

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

const currentUser = users[1];

export default function Dashboard() {
    const [selectedOption, setSelectedOption] = useState('This Month');

    return (
        <div className="h-screen flex flex-col">
            <Navbar user={currentUser} className="h-16 bg-gray-800 text-white flex items-center px-4" />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 p-4 overflow-y-auto ml-[280px] mt-16 pt-10"> {/* Adjusted margin-left and margin-top */}
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Total User</h2>
                            <div className="flex items-center">
                                <span className="text-3xl font-bold mr-2">23</span>   
                            </div>
                            <p className="text-green-700 font-semibold">+ 32.54% from last month</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Total Ticket</h2>
                            <div className="flex items-center">
                                <span className="text-3xl font-bold mr-2">23</span>   
                            </div>
                            <p className="text-green-700 font-semibold">+ 32.54% from last month</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Total Event</h2>
                            <div className="flex items-center">
                                <span className="text-3xl font-bold mr-2">23</span>   
                            </div>
                            <p className="text-green-700 font-semibold">+ 32.54% from last month</p>
                        </div>
                        <div className="col-span-3 bg-white p-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Ticket Overview</h2>
                                <div>
                                    <button className={`mr-2 ${selectedOption === 'Last Month' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} px-3 py-1 rounded-md`} onClick={() => setSelectedOption('Last Month')}>Last Month</button>
                                </div>
                            </div>
                            <div className="h-40 overflow-hidden">
                                <Barchart />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Event Status</h2>
                            <div className="flex items-center mb-4">
                                <p className="text-gray-700">Workshop Membatik</p>
                                <span className="ml-auto text-black-500 font-semibold">Status</span>
                            </div>
                            <div className="flex items-center">
                                <img 
                                    src="" 
                                    alt="Event"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <p className="text-gray-700 flex-1 font-semibold">Event</p>
                                <span className="text-green-700 font-semibold">Finished</span>
                            </div>
                            <br />
                            <div className="flex items-center">
                                <img 
                                    src="" 
                                    alt="Event"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <p className="text-gray-700 flex-1 font-semibold">Event</p>
                                <span className="text-green-700 font-semibold">Finished</span>
                            </div>
                            <br />
                            <div className="flex items-center">
                                <img 
                                    src="" 
                                    alt="Event"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <p className="text-gray-700 flex-1 font-semibold">Event</p>
                                <span className="text-green-700 font-semibold">Finished</span>
                            </div>
                            <br />
                            <div className="flex items-center">
                                <img 
                                    src="" 
                                    alt="Event"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <p className="text-gray-700 flex-1 font-semibold">Event</p>
                                <span className="text-green-700 font-semibold">Finished</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Event Composition</h2> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
