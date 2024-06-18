import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BackIcon from "/src/assets/icons/back-icon.png";
import AddIcon from "/src/assets/icons/add-icon.png";
import ImageIcon from "/src/assets/icons/image-icon.png";
import Ticket from "../../src/assets/icons/tickket.png";
import Calender from "../../src/assets/icons/Calendar.png";

const EditInfoEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [EventName, setEventName] = useState("");
    const [EventPicture, setEventPicture] = useState(null);
    const [EventDesc, setEventDesc] = useState("");
    const [EventStartDate, setEventStartDate] = useState("");
    const [EventEndDate, setEventEndDate] = useState("");
    const [EventPrice, setEventPrice] = useState("");
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/events/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            setEventName(data.event_name);
            setEventPicture(data.event_picture);
            setEventDesc(data.event_description);
            setEventStartDate(data.event_date_start);
            setEventEndDate(data.event_date_end);
            setEventPrice(data.event_price);
            setWordCount(data.event_description.split(/\s+/).filter((word) => word.length > 0).length);
        })
        .catch(error => console.error('Error fetching event data:', error));
    }, [id]);

    const handleEventName = (e) => {
        setEventName(e.target.value);
    };

    const handlePictureChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setEventPicture(file);
        } else {
            setEventPicture(null);
        }
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('event_name', EventName);
        if (EventPicture instanceof File) {
            formData.append('event_picture', EventPicture);
        }
        formData.append('event_description', EventDesc);
        formData.append('event_date_start', EventStartDate);
        formData.append('event_date_end', EventEndDate);
        formData.append('event_price', EventPrice);

        fetch(`http://localhost:3000/events/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate('/setting_event');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <>
            <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10 overflow-x-hidden">
                <div className="mx-10 my-11 space-y-5">
                    <Link to={'/setting_event'}>
                        <div className="flex flex-row items-center">
                            <img src={BackIcon} alt="Back Icon" className="mr-2"/>
                            <h1 className="text-[#AFAFAF]">Setting Event</h1>
                            <h1 className="mx-[5px] text-[#AFAFAF]">/</h1>
                            <h1 className="text-[#CF8E72]">Edit Event</h1>
                        </div>
                    </Link>
                            
                    <h1 className="text-[#728969] text-[32px] font-bold">Edit Information</h1>

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
                            <div className="flex flex-col items-center justify-center py-[40px] w-full max-h-[400px] border border-[#728969] rounded-md">
                                <input 
                                    type="file" 
                                    id="file-input" 
                                    className="hidden" 
                                    accept="image/*" 
                                    onChange={handlePictureChange}
                                />
                                {EventPicture ? (
                                        <div className="flex flex-col items-center space-y-4">
                                            <img src={EventPicture instanceof File ? URL.createObjectURL(EventPicture) : `http://localhost:3000/uploads/${EventPicture}`} alt="Preview" className="w-full max-w-xs h-[300px] rounded-md" />
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                setEventPicture(null)
                                            }}
                                            className="bg-[#728969] text-white py-2 px-4 rounded-md transition duration-300"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ) : (
                                        <label 
                                            htmlFor="file-input" 
                                            className="flex flex-col justify-center items-center space-y-4 cursor-pointer"
                                        >
                                        <img src={AddIcon} alt="Add Icon" />
                                        <div className="flex flex-row justify-center items-center space-x-2">
                                            <img src={ImageIcon} alt="Image Icon" />
                                            <p className="text-[#728969]">browse jpeg/png</p>
                                        </div>
                                    </label>
                                )}
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
                                    <img src={Calender} alt="Calendar Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"/>
                                    <input
                                        type="date"
                                        placeholder="Start Date"
                                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5 pl-12"
                                        value={EventStartDate}
                                        onChange={handleEventStartDate}
                                    />
                                </div>
                                <div className="relative w-1/1">
                                    <img src={Calender} alt="Calendar Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"/>
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
                            <div className="relative">
                                <img src={Ticket} alt="Ticket Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"/>
                                <input
                                    type="text"
                                    placeholder="exp. 50000"
                                    className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5 pl-12"
                                    value={EventPrice}
                                    onChange={handleEventPrice}
                                />
                            </div>
                        </div>
                        
                        {/* Save button */}
                        <div className="flex justify-center py-10">
                            <button
                                type="submit"
                                 className="w-full px-5 py-3 text-center text-white bg-[#728969] border border-[#CBCBCB] rounded-md"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditInfoEvent;
