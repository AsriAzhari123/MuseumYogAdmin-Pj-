import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "/src/assets/icons/delete.png";


const MuseumCardCollection = ({data, onEdit}) => {
    const handleEdit = () => {
        onEdit()
    }

    return (
        <div className="flex flex-col w-full mb-[50px] px-7 py-8 space-y-5 border rounded-lg shadow-custom-shadow bg-white">
            <div className="flex flex-row w-full space-x-5">
                <img src={data.image} alt="" className="w-[200px] h-[150px]"/>
                <div className="flex flex-col justify-start space-y-3">
                    <h1 className="font-bold text-[20px]">
                        {data.titleCollection}
                    </h1>
                    <p className="font-light text-[14px]">
                        {data.descCollection}
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-end items-center space-x-4">
                <button 
                    className="bg-[#728969] px-5 py-2 rounded-[8px] text-white"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button 
                    className="bg-[#FC5C65] px-5 py-2 rounded-[8px]"
                >
                    <img src={DeleteIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default MuseumCardCollection;