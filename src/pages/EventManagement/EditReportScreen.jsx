import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import EditReport from "../../components/EditReport"
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditReportScreen = () => {
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
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <EditReport />
                </div>
            </div>
        </>
    )
}

export default EditReportScreen;