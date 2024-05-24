import React, { useState } from "react";
import BackIcon from "/src/assets/icons/back-icon.png";
import { Link } from "react-router-dom";
import AddIcon from "/src/assets/icons/add-icon.png";
import ImageIcon from "/src/assets/icons/image-icon.png";
import Ticket from "../../src/assets/icons/tickket.png";
import Calender from "../../src/assets/icons/Calendar.png";

const AddInfoEvent = () => {
    const [EventName, setEventName] = useState("");
    const [EventImage, setEventImage] = useState(null);
    const [EventDesc, setEventDesc] = useState("");
    const [EventStartDate, setEventStartDate] = useState("");
    const [EventEndDate, setEventEndDate] = useState("");
    const [EventPrice, setEventPrice] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const handleEventName = (e) => {
        setEventName(e.target.value);
    };

    const handleEventDesc = (e) => {
        const words = e.target.value.split(/\s+/).filter((word) => word.length > 0);
        if (words.length <= 150) {
            setEventDesc(e.target.value);
            setWordCount(words.length);
        }
    };

    const handleEventStartDate = (e) => {
        setEventStartDate(e.target.value);
    };

    const handleEventEndDate = (e) => {
        setEventEndDate(e.target.value);
    };

    const handleEventPrice = (e) => {
        setEventPrice(e.target.value);
    };

    const handleEventImage = (e) => {
        setEventImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save the event details
        console.log({
            EventName,
            EventDesc,
            EventStartDate,
            EventEndDate,
            EventPrice,
            EventImage,
        });
        // You can add logic to save this data to a database or backend server here
    };

    return (
       <>
       <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10 overflow-x-hidden">
                <div className="mx-10 my-11 space-y-5">
                    <Link to={'/setting_event'}>
                        <div className="flex flex-row items-center">
                            <img src={BackIcon} alt="" className="mr-2"/>
                            <h1 className="text-[#AFAFAF]">Setting Event</h1>
                            <h1 className="mx-[5px] text-[#AFAFAF] ">/</h1>
                            <h1 className="text-[#CF8E72]">Add New Event</h1>
                        </div>
                    </Link>
                            
                    <h1 className="text-[#728969] text-[32px] font-bold">Add Event</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Event name input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event Name
                            </h1>
                            <input
                                type="text"
                                placeholder="exp. museum asri azhari"
                                className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                                value={EventName}
                                onChange={handleEventName}
                            />
                        </div>

                        {/* Event Picture input field */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Add Event Picture
                            </h1>
                            <div className="flex items-center justify-center border border-[#728969] rounded-md w-[200px] h-[200px] relative">
                                {EventImage ? (
                                    <img src={EventImage} alt="Event" className="w-full h-full object-cover rounded-md"/>
                                ) : (
                                    <img src={ImageIcon} alt="Placeholder" className="w-[50px] h-[50px]" />
                                )}
                                <input
                                    type="file"
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleEventImage}
                                />
                            </div>
                        </div>

                        {/* Event description input field */}
                        <div className="flex flex-col justify-start space-y-4 relative pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Description of Event
                            </h1>
                            <textarea
                                placeholder="exp. museum asri azhari"
                                className="w-full h-[200px] border border-[#728969] focus:outline-none rounded-md p-5"
                                value={EventDesc}
                                onChange={handleEventDesc}
                            />
                            <div className="absolute bottom-2 right-4 text-[#505050]">
                                {wordCount}/150 words
                            </div>
                        </div>

                        {/* Event timeline input fields */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event Timeline
                            </h1>
                            <div className="flex space-x-4">
                                <div className="relative w-1/1">
                                    <img src={Calender} alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"/>
                                    <input
                                        type="date"
                                        placeholder="Start Date"
                                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5 pl-12"
                                        value={EventStartDate}
                                        onChange={handleEventStartDate}
                                    />
                                </div>
                                <div className="relative w-1/1">
                                    <img src={Calender} alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"/>
                                    <input
                                        type="date"
                                        placeholder="End Date"
                                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5 pl-12"
                                        value={EventEndDate}
                                        onChange={handleEventEndDate}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Event price input field */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event Price
                            </h1>
                            <div className="relative w-full">
                                <img src={Ticket} alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"/>
                                <input
                                    type="text"
                                    placeholder="Rp.100000"
                                    className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5 pl-12"
                                    value={EventPrice}
                                    onChange={handleEventPrice}
                                />
                            </div>
                        </div>

                        {/* Save Changes button */}
                        <div className="flex justify-end mt-10">
                            <button
                                type="submit"
                                className="w-full px-5 py-3 text-center text-white bg-[#728969] border border-[#CBCBCB] rounded-md"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>  
       </>
    );
}

export default AddInfoEvent;