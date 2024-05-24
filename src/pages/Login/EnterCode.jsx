import React, { useState, useRef } from "react";
import BackgroundImage from "/src/assets/background.png";
import Logo from "/src/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EnterCode({ userEmail }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    // Validate only numbers
    if (!/^\d*$/.test(value)) {
      setError("Code must contain only numbers.");
      return;
    }
    setError("");

    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const enteredCode = code.join("");
    if (enteredCode.length !== 4) {
      setError("Code must be exactly 4 characters long.");
      return;
    }
    setMessage("Code submitted successfully!");
    navigate("/new_password");
  };

  const handleResendCode = () => {
    setResendMessage("Code resent successfully!");
    setTimeout(() => setResendMessage(""), 3000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${BackgroundImage})`
      }}
    >
      <img src={Logo} alt="logo" className="m-10 self-start" />

      <div className="flex flex-grow justify-center items-center w-full mb-10">
        <div className="w-[750px] bg-white p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)]">
          <h1 className="text-center mt-5 mb-4 font-bold text-[24px]">Enter Code</h1>
          <div className="flex justify-center mb-6">
            <p className="text-gray-600">We sent a code to your email {userEmail}</p>
          </div>
          {error && <p className="text-red-500 mb-6 text-center">{error}</p>}
          {message && <p className="text-green-500 mb-6 text-center">{message}</p>}
          {resendMessage && <p className="text-green-500 mb-6 text-center">{resendMessage}</p>}
          <form className="space-y-9" onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-3 mb-4">
              {code.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-20 h-20 text-center border border-gray-400 rounded-lg focus:outline-none text-2xl"
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
            </div>
            <div className="flex flex-row space-x-2 my-10 justify-center items-center font-light">
              <h1 className="flex justify-center mb-6">Didn't receive the code?</h1>
              <button
                type="button"
                className="flex justify-center mb-6 font-semibold"
                onClick={handleResendCode}
              >
                Resend The Code
              </button>
            </div>
            <div className="flex items-center justify-center">
              <Link to={'/new_password'}>
                <button
                  className="bg-[#728969] hover:bg-[#728969] text-white font-bold w-full py-4 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Continue
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
