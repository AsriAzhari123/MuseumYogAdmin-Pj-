import React, { useState } from "react";
import IndividualTicket from "../../dataSample/IndividualTicketData";
import PacketTicketData from "../../dataSample/PacketTicketData";
import DeleteIcon from "../../assets/icons/delete.png"
import AddIndividualTicket from "../../components/AddIndividualTicket";
import EditIndividualTicket from "../../components/EditIndividualTicket";
import AddPacketTicket from "../../components/AddPacketTicket";
import EditPacketTicket from "../../components/EditPacketTicket";


const SettingTicket = () => {
    const [isAddIndividual, setIsAddIndividual] = useState(false);
    const [isEditIndividual, setIsEditIndividual] = useState(false);
    const [isAddPacket, setIsAddPacket] = useState(false);
    const [isEditPacket, setIsEditPacket] = useState(false);

    const handleAddIndividual = () => {
        setIsAddIndividual(true);
    }

    const handleCloseAddIndividual = () => {
        setIsAddIndividual(false);
    }

    const handleEditIndividual = () => {
        setIsEditIndividual(true);
    }

    const handleCloseEditIndividual = () => {
        setIsEditIndividual(false)
    }

    const handleAddPacket = () => {
        setIsAddPacket(true);
    }

    const handleCloseAddPacket = () => {
        setIsAddPacket(false)
    }

    const handleEditPacket = () => {
        setIsEditPacket(true);
    }

    const handleCloseEditPacket = () => {
        setIsEditPacket(false);
    }


    return(
        <>
            <div className="flex flex-col ml-[260px] mt-5 mb-10 space-y-10">
                {/* individual ticket */}
                <div className="flex flex-col bg-white shadow-custom-shadow w-full px-8 py-10 rounded-[8px] space-y-5">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-bold text-[24px] text-black">
                                Individual Ticket Type
                            </h1>
                            <p className="font-light text-[16px] text-black">
                                List of available ticket types
                            </p>
                        </div>
                        <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-3" onClick={handleAddIndividual}>
                            Add Ticket
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                        {IndividualTicket.map((ticket, index) => 
                            <div key={index} className="flex flex-row justify-between items-center rounded-[8px] border border-[#728969] bg-white h-[150px] px-8">
                                <div className="flex flex-col space-y-4">
                                    <h1 className="font-bold text-[20px] text-black">
                                        {ticket.ticketName}
                                    </h1>
                                    <p className="font-light text-black text-[16px]">
                                        {ticket.ticketDescription}
                                    </p>
                                    <p>
                                        Rp {ticket.ticketPrice}
                                    </p>
                                </div>
                                <div className="flex flex-row items-center space-x-5">
                                    <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-2" onClick={handleEditIndividual}>
                                        Edit
                                    </button>
                                    <button className="bg-[#C57557] text-white rounded-[8px] px-4 py-2">
                                        <img src={DeleteIcon} alt="" />
                                    </button>
                                </div>
                            </div>    
                        )}
                    </div>
                </div>

                {isAddIndividual && (
                    <div className="fixed ml-[280px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <AddIndividualTicket onSave={handleCloseAddIndividual} />
                    </div>
                )}

                {isEditIndividual && (
                    <div className="fixed ml-[280px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <EditIndividualTicket onSave={handleCloseEditIndividual} />
                    </div>
                )}

                {/* packet ticket */}
                <div className="flex flex-col bg-white shadow-custom-shadow w-full px-8 py-10 rounded-[8px] space-y-5">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-bold text-[24px] text-black">
                                Package Ticket Type
                            </h1>
                            <p className="font-light text-[16px] text-black">
                                List of available ticket types
                            </p>
                        </div>
                        <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-3" onClick={handleAddPacket}>
                            Add Ticket
                        </button>
                    </div>

                    <div className="flex flex-col items-start space-y-5">
                        {PacketTicketData.map((ticket, index) => 
                            <div key={index} className="flex flex-col items-start rounded-[8px] border border-[#728969] bg-white max-h-[250px] px-8 py-7 w-full space-y-7">
                                <div className="flex flex-col space-y-6">
                                    <h1 className="font-bold text-black text-[20px]">
                                        {ticket.ticketName}
                                    </h1>
                                    <p className="font-light text-black text-[16px]">
                                        {ticket.ticketDescription}
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <p className="font-bold text-[#728969] text-[24px]">
                                        Rp {ticket.ticketPrice}/pack
                                    </p>
                                    <div className="flex flex-row items-center space-x-5">
                                        <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-2" onClick={handleEditPacket}>
                                            Edit
                                        </button>
                                        <button className="bg-[#C57557] text-white rounded-[8px] px-4 py-2">
                                            <img src={DeleteIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>
                </div>

                {isAddPacket && (
                    <div className="fixed ml-[280px] inset-0 pt-[100px] bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <AddPacketTicket onSave={handleCloseAddPacket} />
                    </div>
                )}
                {isEditPacket && (
                    <div className="fixed ml-[280px] inset-0 pt-[100px] bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <EditPacketTicket onSave={handleCloseEditPacket} />
                    </div>
                )}
            </div>
        </>
    )
}

export default SettingTicket;