import React, { useState } from "react";
import BackgroundImage from "/src/assets/background.png";
import EmailIcon from "/src/assets/icons/email.png";
import PasswordIcon from "/src/assets/icons/password.png";
import { useNavigate, Link } from "react-router-dom";
import Logo from "/src/assets/logo.png";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      console.log(response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred during login.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div 
      className="bg-scroll bg-no-repeat bg-cover min-h-screen flex flex-col justify-center" 
      style={{ backgroundImage: `url(${BackgroundImage})` }} 
    >
      <img src={Logo} alt="logo" className="m-10 self-start"/>
      <div className="flex justify-center items-center">
        <div className="w-[750px] bg-white mb-[50px] p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)]">
          <h1 className="text-center mt-5 mb-10 font-bold text-[24px]">Welcome Back</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form className="rounded space-y-9" onSubmit={handleSubmit}>
            <div className="mb-4 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={EmailIcon} alt="email-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input 
                  className="w-full py-2 px-5 text-gray-700 focus:outline-none" 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>
            </div>
            <div className="mb-6 space-y-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                <img src={PasswordIcon} alt="password-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                <input 
                  className="w-full py-2 px-5 text-gray-700 focus:outline-none" 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyPress}  
                />
              </div>
              <div className="flex justify-end">
                <Link to={"/forgot_password"}>
                  <button className="text-[#728969] font-bold">Forgot Password?</button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button 
                className="bg-[#728969] hover:bg-[#728969] text-white font-bold w-full py-4 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-row space-x-2 my-10 justify-center items-center font-light ">
            <h1 className="text-black text-[20px]">
              Don’t have an account?
            </h1>
            <Link to={'/signup'}>
              <button className="text-[#728969] font-bold">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
