import React, { useState } from "react";
import BackgroundImage from "/src/assets/background.png";
import EmailIcon from "/src/assets/icons/email.png";
import PasswordIcon from "/src/assets/icons/password.png";
import Logo from "/src/assets/logo.png";
import { useNavigate  } from "react-router-dom";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length !== 8) {
      setError("Password must be exactly 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");

    navigate("/login")
    console.log("Password set successfully!");
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
          <h1 className="text-center mt-5 mb-4 font-bold text-[24px]">Set New Password</h1>
          {/* Centered Paragraph */}
          <div className="flex justify-center mb-6">
            <p className="text-gray-600">Must be at least 8 characters.
            </p>
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 mb-6 text-center">{error}</p>}
          {/* Form */}
          <form className="space-y-9" onSubmit={handleSubmit}>
            <div className="mb-4 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={PasswordIcon} alt="password-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input 
                  className="w-full py-2 px-5 text-gray-700 focus:outline-none" 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={8} // Restrict input to 8 characters
                />
              </div>
            </div>
            <div className="mb-4 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={PasswordIcon} alt="confirm-password-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input 
                  className="w-full py-2 px-5 text-gray-700 focus:outline-none" 
                  id="confirm-password" 
                  type="password" 
                  placeholder="Confirm your password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  maxLength={8} // Restrict input to 8 characters
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-[#728969] hover:bg-[#728969] text-white font-bold w-full py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Set new password
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
