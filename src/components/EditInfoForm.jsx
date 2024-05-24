import React, { useState } from "react";
import BackIcon from "/src/assets/icons/back-icon.png";
import { Link } from "react-router-dom";
import AddIcon from "/src/assets/icons/add-icon.png";
import ImageIcon from "/src/assets/icons/image-icon.png";
import LocationIcon from "/src/assets/icons/location-icon.png";
import DropdownIcon from "/src/assets/icons/arrow-down.png";


const EditInformationForm = () => {
    const [museumName, setMuseumName] = useState("");
    const [museumDesc,setMuseumDesc] = useState("");
    const [museumAddress, setMuseumAddress] = useState("");
    const [museumImage, setMuseumImage] = useState([]);
    const [fileName, setFileName] = useState('');
    const [filePreview, setFilePreview] = useState(null);
    const [transportation, setTransportation] = useState([{}]);
    const [fasilitas, setFasilitas] = useState([{}]);

    const addTransportation = () => {
        setTransportation([...transportation, {}]);
    };

    const addFasilitas = () => {
        setFasilitas([...fasilitas, {}]);
    }

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setFileName(file.name);
            setFilePreview(URL.createObjectURL(file));
        } else {
            setFileName('');
            setFilePreview(null);
        }
    };


    return (
        <>
            <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10 overflow-x-hidden bg-[#F8F8F8]">
                <div className="mx-10 my-11 space-y-5">
                    <Link to={'/cms'}>
                        <div className="flex flex-row items-center">
                            <img src={BackIcon} alt="" className="mr-2"/>
                            <h1 className="text-[#AFAFAF]">Museum Information</h1>
                            <h1 className="mx-[5px] text-[#AFAFAF] ">/</h1>
                            <h1 className="text-[#CF8E72]">Edit Information</h1>
                        </div>
                    </Link>
                            
                    <h1 className="text-[#728969] text-[32px] font-bold">Edit Information</h1>

                    {/* museum name input field */}
                    <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Museum Name
                            </h1>
                            <input 
                                type="text" 
                                placeholder="exp. museum raihan" 
                                className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5 bg-[#F8F8F8]"
                                value={museumName}
                                onChange={(e) => setMuseumName(e.target.value)}
                            />
                        </div>

                        {/* museum thumbnail input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Add Thumbnail Picture
                            </h1>
                            <div className="flex flex-col items-center justify-center py-[40px] w-full border border-[#728969] rounded-md">
                                <input 
                                    type="file" 
                                    id="file-input" 
                                    className="hidden" 
                                    accept="image/*" 
                                    onChange={handleFileChange}
                                />
                                {filePreview ? (
                                        <div className="flex flex-col items-center space-y-4">
                                            <img src={filePreview} alt="Preview" className="w-full max-w-xs rounded-md" />
                                        <button 
                                            onClick={() => {
                                                setFilePreview(null);
                                                setFileName('');
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

                        {/*  other picture input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <div>
                                <h1 className="text-[#505050] font-bold text-[24px]">
                                    Add Other Picture
                                </h1>
                                <p className="text-[#505050]">
                                    *This section will be shown in visitor page
                                </p>
                            </div>
                            <div className="flex flex-row items-center space-x-5">   
                                <div className="flex flex-col items-center justify-center py-[40px] w-[250px] border border-[#728969] rounded-md">
                                    <input 
                                        type="file" 
                                        id="file-input" 
                                        className="hidden" 
                                        accept="image/*" 
                                        onChange={handleFileChange}
                                    />
                                    {filePreview ? (
                                            <div className="flex flex-col items-center space-y-4">
                                                <img src={filePreview} alt="Preview" className="w-full max-w-xs rounded-md" />
                                            <button 
                                                onClick={() => {
                                                    setFilePreview(null);
                                                    setFileName('');
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
                                <div className="flex flex-col items-center justify-center py-[40px] w-[250px] border border-[#728969] rounded-md">
                                    <input 
                                        type="file" 
                                        id="file-input" 
                                        className="hidden" 
                                        accept="image/*" 
                                        onChange={handleFileChange}
                                    />
                                    {filePreview ? (
                                            <div className="flex flex-col items-center space-y-4">
                                                <img src={filePreview} alt="Preview" className="w-full max-w-xs rounded-md" />
                                            <button 
                                                onClick={() => {
                                                    setFilePreview(null);
                                                    setFileName('');
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
                                <div className="flex flex-col items-center justify-center py-[40px] w-[250px] border border-[#728969] rounded-md">
                                    <input 
                                        type="file" 
                                        id="file-input" 
                                        className="hidden" 
                                        accept="image/*" 
                                        onChange={handleFileChange}
                                    />
                                    {filePreview ? (
                                            <div className="flex flex-col items-center space-y-4">
                                                <img src={filePreview} alt="Preview" className="w-full max-w-xs rounded-md" />
                                            <button 
                                                onClick={() => {
                                                    setFilePreview(null);
                                                    setFileName('');
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
                            
                        </div>

                        {/* museum description input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Description of Museum
                            </h1>
                            <div className="relative w-full">
                                <textarea 
                                    placeholder="exp. museum raihan" 
                                    className="w-full h-[150px] border border-[#728969] focus:outline-none rounded-md p-5 resize-none bg-[#F8F8F8]"
                                    maxLength={150}
                                    value={museumDesc}
                                    onChange={(e) => setMuseumDesc(e.target.value)}
                                />
                                <div className="absolute bottom-2 right-2 text-[#808080] p-5 items-end">
                                    {museumDesc.length} / 150 words
                                </div>
                            </div>
                        </div>

                        {/* museum address input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Museum Address
                            </h1>
                            <div className="flex items-center border border-gray-400 rounded w-full h-[60px]">
                                <img src={LocationIcon} alt="location-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                                <input className="w-full py-2 px-5 border-[#728969] text-gray-700 focus:outline-none bg-[#F8F8F8]" id="email" type="text" placeholder="exp. Jalan Kenangan"  value={museumAddress} onChange={(e) => setMuseumAddress(e.target.value)} />
                            </div>
                        </div>

                        {/* museum date input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Open Hours
                            </h1>
                            <div className="grid grid-cols-5 gap-4 text-[#818181]">
                                <div className="flex flex-row items-center justify-start space-x-5 px-5 py-4 border border-[#728969] w-[150px] rounded-md">
                                <input type="checkbox" className="w-5 h-5"/>
                                <h1>Monday</h1>
                            </div>
                            <div className="flex flex-row items-center justify-start space-x-5 px-5 py-4 border border-[#728969] w-[150px] rounded-md">
                                <input type="checkbox" className="w-5 h-5"/>
                                <h1>Tuesday</h1>
                            </div>
                            <div className="flex flex-row items-center justify-start space-x-5 px-5 py-4 border border-[#728969] w-[150px] rounded-md">
                                <input type="checkbox" className="w-5 h-5"/>
                                <h1>Wednesday</h1>
                            </div>
                            <div className="flex flex-row items-center justify-start space-x-5 px-5 py-4 border border-[#728969] w-[150px] rounded-md">
                                <input type="checkbox" className="w-5 h-5"/>
                                <h1>Thursday</h1>
                            </div>
                            <div className="flex flex-row items-center justify-start space-x-5 px-5 py-4 border border-[#728969] w-[150px] rounded-md">
                                <input type="checkbox" className="w-5 h-5"/>
                                <h1>Friday</h1>
                            </div>
                            <div className="flex flex-row items-center justify-start space-x-5 px-5 py-4 border border-[#728969] w-[150px] rounded-md">
                                <input type="checkbox" className="w-5 h-5"/>
                                <h1>Saturday</h1>
                            </div>
                            <div className="flex flex-row items-center justify-start space-x-5 px-5 py-4 border border-[#728969] w-[150px] rounded-md">
                                <input type="checkbox" className="w-5 h-5"/>
                                <h1>Sunday</h1>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-8 text-[#728969]">
                            <div className="space-y-3">
                                <p>Open</p>
                                <input type="text" className="h-[50px] border border-[#728969] focus:outline-none rounded-md px-5 w-[150px] bg-[#F8F8F8]"/>
                            </div>
                            <div className="space-y-3">
                                <p>Close</p>
                                <input type="text" className="h-[50px] border border-[#728969] focus:outline-none rounded-md px-5 w-[150px] bg-[#F8F8F8]"/>
                            </div>
                        </div>
                        <div className="space-y-3 text-[#728969]">
                            <p>Other Information</p>
                            <input type="text" placeholder="exp. Museum is closed during holidays" className="w-full py-2 h-[60px] px-5 border border-[#728969] text-gray-700 focus:outline-none rounded-md bg-[#F8F8F8]"/>
                        </div>

                        {/* transportation input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Transportation
                            </h1>
                            {transportation.map((form, index) => (
                                <div key={index} className="border border-[#728969] w-full h-[250px] flex flex-col justify-center items-start p-5 text-[#728969] rounded-md space-y-5">
                                    <div className="flex flex-row w-full space-x-5">
                                        <div className="flex flex-col w-1/2 space-y-3">
                                            <p>Transportation</p>
                                            <div className="relative w-[300px] h-[50px]">
                                                <select className="block appearance-none w-full h-full border border-[#728969] text-[#808080] py-2 px-5 pr-8 rounded leading-tight placeholder:text-[#808080] focus:outline-none focus:border-[#728969] bg-[#F8F8F8]">
                                                    <option value="" disabled selected>Please choose one</option>
                                                    <option value="bus">Bus</option>
                                                    <option value="train">Train</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <img src={DropdownIcon} alt="arrow-icon" className="mr-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full space-y-3">
                                            <p>Distance</p>
                                            <input type="text" className="h-[50px] border border-[#728969] focus:outline-none rounded-md px-5 w-full placeholder:text-[#808080] bg-[#F8F8F8]" placeholder="exp. 200m" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full space-y-3">
                                        <p>Transportation Name</p>
                                        <input type="text" className="h-[50px] border border-[#728969] focus:outline-none rounded-md px-5 w-full placeholder:text-[#808080] bg-[#F8F8F8]" placeholder="exp. Stasiun Balapan"/>
                                    </div>
                                </div>
                            ))}
                            <button 
                                onClick={addTransportation} 
                                className="w-full px-5 py-4 text-center text-[#728969] bg-[#E8ECDC] border border-[#CBCBCB] rounded-md"
                            >
                                + Add other transportation
                            </button>
                        </div>

                        {/* facility input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Facility
                            </h1>
                            {fasilitas.map((fasilitas, index) => (
                                <div className="border border-[#728969] w-full h-min flex flex-col justify-center items-start p-5 text-[#728969] rounded-md space-y-5">
                                    <div className="flex flex-row w-full space-x-5">
                                        <div className="flex flex-col w-1/2 space-y-3">
                                            <p>Facility</p>
                                            <div className="relative w-[300px] h-[50px]">
                                                <select className="block appearance-none w-full h-full border border-[#728969] text-[#808080] py-2 px-5 pr-8 rounded leading-tight placeholder:text-[#808080] focus:outline-none focus:border-[#728969] bg-[#F8F8F8]">
                                                    <option value="" disabled selected>Please choose one</option>
                                                    <option value="musholla">Musholla</option>
                                                    <option value="kamar_mandi">Kamar Mandi</option>
                                                    <option value="restaurant">Restaurant</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <img src={DropdownIcon} alt="arrow-icon" className="mr-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button 
                                className="w-full px-5 py-4 text-center text-[#728969] bg-[#E8ECDC] border border-[#CBCBCB] rounded-md"
                                onClick={addFasilitas}
                            >
                                + Add other facility
                            </button>
                        </div>

                        <Link to={'/cms'}>
                            <button className="w-full px-5 py-3 text-center text-white bg-[#728969] border border-[#CBCBCB] rounded-md">
                                Save
                            </button>
                        </Link>
                    </div>  
                </div>
            </div>
        </>
    );
}

export default EditInformationForm;