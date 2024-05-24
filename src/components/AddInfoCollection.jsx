import React, { useState } from 'react';
import AddIcon from "/src/assets/icons/add-icon.png";
import ImageIcon from "/src/assets/icons/image-icon.png";

const AddInfoCollection = ({ onClose }) => {
    const [imageCollection, setImageCollection] = useState(null);
    const [titleCollection, setTitleCollection] = useState("");
    const [descCollection, setDescCollection] = useState("");

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setImageCollection(URL.createObjectURL(file));
        } else {
            setImageCollection(null);
        }
    };

    const handleSubmit = () => {
        // Logika untuk menambah koleksi museum bisa ditambahkan di sini
        // Setelah selesai, tutup modal
        onClose();
    }


    return (
        <>
            <div className='flex flex-col w-[600px] bg-white mb-[50px] px-7 py-8 space-y-5 rounded-[8px] shadow-sm'>
                <div className="flex flex-col items-center justify-center py-[40px] w-full border border-[#728969] rounded-md">
                    <input 
                        type="file" 
                        id="file-input" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleImageChange}
                    />            
                    {imageCollection ? (
                        <div className="flex flex-col items-center space-y-4">
                            <img src={imageCollection} alt="Preview" className="w-full max-w-xs rounded-md" />
                            <button 
                                onClick={() => {
                                    setImageCollection(null);
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

                {/* title collection input form */}
                <div className="flex flex-col justify-start space-y-4">
                    <h1 className="text-[#505050] font-bold text-[24px]">
                        Collection Name
                    </h1>
                    <input 
                        type="text" 
                        placeholder="exp. museum raihan" 
                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                        value={titleCollection}
                        onChange={(e) => setTitleCollection(e.target.value)}
                    />
                </div>

                {/* description collection input form */}
                <div className="flex flex-col justify-start space-y-4">
                    <h1 className="text-[#505050] font-bold text-[24px]">
                        Description of Collection
                    </h1>
                    <div className="relative w-full">
                    <textarea 
                        placeholder="exp. museum raihan" 
                        className="w-full h-[100px] border border-[#728969] focus:outline-none rounded-md p-5 resize-none"
                        maxLength={100}
                        value={descCollection}
                        onChange={(e) => setDescCollection(e.target.value)}
                    />
                        <div className="absolute bottom-2 right-2 text-[#808080] p-5 items-end">
                            {descCollection.length} / 100 words
                        </div>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button 
                        className='bg-[#7F9275] rounded-[8px] w-[250px] text-white px-3 py-2 text-[14px]'
                        onClick={handleSubmit}
                    >
                        + Add Museum Collection
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddInfoCollection;