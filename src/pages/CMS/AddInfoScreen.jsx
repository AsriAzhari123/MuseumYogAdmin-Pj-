import React, { useEffect, useState } from 'react';
import AddInformationForm from '../../components/AddInfoForm';
import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddInformationScreen = () => {
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/auth/currentUser', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            setCurrentUser(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUser();
      }, [navigate]);

    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={currentUser} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex flex-1 overflow-hidden bg-[#F8F8F8]">
                    <Sidebar />
                    <AddInformationForm />
                </div>
            </div>
        </>
    )
}

export default AddInformationScreen;