import React from "react";
import { useState, useRef } from "react";
import TicketData from "../../dataSample/TicketData";
import DiagramBatang from '../../components/Barchart';

const TicketReport = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const dateInputRef = useRef(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div className="flex flex-col ml-[260px] mt-5 mb-10 space-y-5">
            <div className="bg-white shadow-custom-shadow w-full flex flex-col rounded-[8px] p-10 space-y-10">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold text-[25px] text-black">
                    Ticket Order Data
                    </h1>
                    <div className="flex flex-row items-center space-x-4">
                    {/* date picker */}
                    <div className="relative flex items-center w-[250px] border border-gray-300 rounded-[8px] px-4 py-3 h-[50px]">
                        <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        ref={dateInputRef}
                        className="w-full text-gray-700 focus:outline-none placeholder:text-gray-700"
                        />
                    </div>
                    </div>
                </div>

                {/* table data */}
                <table className="border-collapse border border-slate-700">
                    <thead className="bg-[#C57557] h-[60px] w-full">
                    <tr className="text-white text-center">
                        <th className="border border-slate-700">Name</th>
                        <th className="border border-slate-700">Type Ticket</th>
                        <th className="border border-slate-700">Amount</th>
                        <th className="border border-slate-700">Visit Schedule</th>
                        <th className="border border-slate-700">Status</th>
                        <th className="border border-slate-700">Action</th>
                    </tr>
                    </thead>
                    <tbody className="w-full">
                    {TicketData.map((ticket, index) => 
                        <tr key={index} className="h-[60px] text-center text-black">
                        <td className="border border-slate-700">
                            {ticket.nama}
                        </td>
                        <td className="border border-slate-700">
                            {ticket.tipeTicket}
                        </td>
                        <td className="border border-slate-700">
                            {ticket.jumlah}
                        </td>
                        <td className="border border-slate-700">
                            {ticket.jadwalKedatangan}
                        </td>
                        <td className="border border-slate-700 text-[#8C9C82]">
                            {ticket.status}
                        </td>
                        <td className="border border-slate-700">
                            <button className="bg-[#C57557] px-3 py-2 rounded-[8px] text-white">
                            Check In
                            </button>
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
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
    )
}

export default TicketReport;