import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import BackIcon from "/src/assets/icons/back-icon.png";
import PasswordIcon from "../assets/icons/password.png";

const EditProfile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    useEffect(() => {
        // Fetch current user data from the backend
        axios.get('/api/auth/currentUser')
            .then(response => {
                const { username, email, phone, picture_profile } = response.data;
                setUsername(username);
                setEmail(email);
                setPhone(phone);
                setSelectedImage(picture_profile);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = () => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('phone', phone);
        if (selectedImage) {
            formData.append('picture_profile', selectedImage);
        }

        axios.put('/api/auth/updateProfile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            console.log('Profile updated successfully:', response.data);
        })
        .catch(error => {
            console.error('Error updating profile:', error);
        });
    };

    const handleChangePassword = () => {
        axios.post('/api/auth/changePassword', {
            currentPassword,
            newPassword
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            console.log('Password changed successfully:', response.data);
        })
        .catch(error => {
            console.error('Error changing password:', error);
        });
    };

    return (
        <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10 overflow-x-hidden bg-[#F8F8F8]">
            <div className="mx-10 my-11 space-y-5">
                <Link to={'/profile'}>
                    <div className="flex flex-row items-center">
                        <img src={BackIcon} alt="Back" className="mr-2" />
                        <h1 className="text-[#AFAFAF]">Personal Information</h1>
                        <h1 className="mx-[5px] text-[#AFAFAF] ">/</h1>
                        <h1 className="text-[#CF8E72]">Edit Information</h1>
                    </div>
                </Link>
                <h1 className="text-[#728969] text-[24px] font-bold ml-3">Edit Personal Information</h1>
                <div className='flex ml-3'>
                    <div className="items-center space-x-5 text-start mt-[2px] mb-5">
                        <label htmlFor="profileImage">
                            <img src={selectedImage || 'default_image_url'} alt="Profile" className="w-40 h-40 rounded-full cursor-pointer" />
                        </label>
                        <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                        <h1 className='font-extralight text-[12px] text-[#728969] mt-2'>click to change the photo</h1>
                    </div>
                    <div className='flex flex-row'>
                        <div className='ml-12'>
                            <h1 className='font-normal text-[16px]'>Username</h1>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='border border-[#728969] rounded-[8px] w-[750px] px-5 py-3 mt-2'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col ml-3'>
                    <h1 className='font-normal text-[16px]'>Email</h1>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2'
                    />
                    <h1 className='font-normal text-[16px] mt-6'>Phone Number</h1>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2'
                    />
                    <button className="bg-[#7F9275] w-[957px] font-bold text-white rounded-[8px] px-4 py-3 mt-9" onClick={handleSaveProfile}>
                        Save Changes
                    </button>
                    <h1 className="text-[#728969] text-[24px] font-bold mt-10">Change Password</h1>
                    <h1 className='font-normal text-[16px] mt-4'>Current Password</h1>
                    <div className='flex border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2 justify-between items-center'>
                        <div className="flex flex-row space-x-3 items-center">
                            <img src={PasswordIcon} alt="Password Icon" />
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                
                            />
                        </div>
                        <div onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                            {showCurrentPassword ? <AiOutlineEye className="cursor-pointer" /> : <AiOutlineEyeInvisible className="cursor-pointer" />}
                        </div>
                    </div>
                    <h1 className='font-normal text-[16px] mt-6'>New Password</h1>
                    <div className='flex border border-[#728969] rounded-[8px] w-[957px] px-5 py-3 mt-2 justify-between items-center'>
                        <div className="flex flex-row space-x-3 items-center">
                            <img src={PasswordIcon} alt="Password Icon" />
                            <input
                                type={showNewPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className='border-none outline-none'
                            />
                        </div>
                        <div onClick={() => setShowNewPassword(!showNewPassword)}>
                            {showNewPassword ? <AiOutlineEye className="cursor-pointer" /> : <AiOutlineEyeInvisible className="cursor-pointer" />}
                        </div>
                    </div>
                    <button className="bg-[#7F9275] w-[957px] font-bold text-white rounded-[8px] px-4 py-3 mt-9" onClick={handleChangePassword}>
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
