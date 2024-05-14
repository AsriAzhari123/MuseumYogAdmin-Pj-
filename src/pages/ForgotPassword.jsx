import React, { useState } from "react";
import BackgroundImage from "../assets/background.png";
import EmailIcon from "../assets/icons/email.png";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

// Mock function to simulate sending an email
const sendResetCode = async (email) => {
  // Simulating API call to send the reset code
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com") {
        resolve("Code sent successfully!");
      } else {
        reject("Failed to send code. Please try again.");
      }
    }, 2000);
  });
};

// ForgotPassword component with form for email
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const response = await sendResetCode(email);
      setMessage(response);
      navigate("/code_verification")
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-cover" 
      style={{
        backgroundImage: `url(${BackgroundImage})`
      }} 
    >
      <img src={Logo} alt="logo" className="m-10 self-start"/>

      <div className="flex flex-grow justify-center items-center w-full">
        <div className="w-[750px] bg-white p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)]">
          <h1 className="text-center mt-5 mb-4 font-bold text-[24px]">Forgot Password</h1>
          {/* Centered Paragraph */}
          <div className="flex justify-center mb-6">
            <p className="text-gray-600">Enter your email and wait for the code to be sent.</p>
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 mb-6 text-center">{error}</p>}
          {/* Success Message */}
          {message && <p className="text-green-500 mb-6 text-center">{message}</p>}
          {/* Form */}
          <form className="space-y-9" onSubmit={handleSubmit}>
            <div className="mb-4 space-y-3">
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={EmailIcon} alt="email-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input 
                  className="w-full py-2 px-5 text-gray-700 focus:outline-none" 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-[#728969] hover:bg-[#728969] text-white font-bold w-full py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Send Code
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
