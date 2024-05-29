import React  from 'react';
import { useState } from 'react';
import BackIcon from "/src/assets/icons/back-icon.png";
import PasswordIcon from "../assets/icons/password.png";
import HideIcon from "../assets/icons/hide.png";
import { Link } from "react-router-dom";
import UserSampleAccount from "../dataSample/UserAccount";

const EditProfile = () => {
    const user = UserSampleAccount[0];
    const handleSaveIndividual = () => {
        setIsSaveIndividual(true);
    }

    return (
        <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10 overflow-x-hidden bg-[#F8F8F8]">
            <div className="mx-10 my-11 space-y-5">
                <Link to={'/profile'}>
                    <div className="flex flex-row items-center">
                        <img src={BackIcon} alt="" className="mr-2"/>
                        <h1 className="text-[#AFAFAF]">Personal Information</h1>
                        <h1 className="mx-[5px] text-[#AFAFAF] ">/</h1>
                        <h1 className="text-[#CF8E72]">Edit Information</h1>
                    </div>
                </Link>
                <h1 className="text-[#728969] text-[24px] font-bold ml-3">Edit Personal Information</h1>
                <div className='flex ml-3'>
                    <div className="items-center space-x-5 text-start mt-[2px] mb-5">
                        <img src={user.image} alt={user.name} className="w-40 h-40 rounded-full" />
                        <h1 className='font-extralight text-[12px] text-[#728969] mt-2'>click to change the photo</h1>
                    </div>
                    <div className='flex flex-row'>
                        <div className='ml-12'>
                            <h1 className='font-normal text-[16px]'>First Name</h1>
                            <div className='border border-[#728969] rounded-[8px] w-[750px] px-5 py-3 mt-2'>
                                <h1 className='font-normal text-[16px] text-[#728969]'>John</h1>
                            </div>
                            <h1 className='font-normal text-[16px] mt-6'>Last Name</h1>
                            <div className='border border-[#728969] rounded-[8px] w-[750px] px-5 py-3 mt-2'>
                                <h1 className='font-normal text-[16px] text-[#728969]'>Doe</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col ml-3'>
                    <h1 className='font-normal text-[16px]'>Email</h1>
                    <div className='border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2'>
                        <h1 className='font-normal text-[16px] text-[#728969]'>johndoe45@gmail.com</h1>
                    </div>
                    <h1 className='font-normal text-[16px] mt-6'>Phone Number</h1>
                    <div className='border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2'>
                        <h1 className='font-normal text-[16px] text-[#728969]'>081234567890</h1>
                    </div>
                    <button className="bg-[#7F9275] w-[957px] font-bold text-white rounded-[8px] px-4 py-3 mt-9" onClick={handleSaveIndividual}>
                        Save Changes
                    </button>
                    <h1 className="text-[#728969] text-[24px] font-bold mt-10">Changes Password</h1>
                    <h1 className='font-normal text-[16px] mt-4'>Current Password</h1>
                    <div className='flex border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2 justify-between items-center'>
                        <div className="flex flex-row space-x-3 items-center">
                            <img src={PasswordIcon} alt="" />
                            <h1>********</h1>
                        </div>
                        <div>
                            <img src={HideIcon} alt="" />
                        </div>
                    </div>
                    <h1 className='font-normal text-[16px] mt-6'>New Password</h1>
                    <div className='flex border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2 justify-between items-center'>
                        <div className="flex flex-row space-x-3 items-center">
                            <img src={PasswordIcon} alt="" />
                            <h1>********</h1>
                        </div>
                        <div>
                            <img src={HideIcon} alt="" />
                        </div>
                    </div>
                    <button className="bg-[#7F9275] w-[957px] font-bold text-white rounded-[8px] px-4 py-3 mt-9" onClick={handleSaveIndividual}>
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
