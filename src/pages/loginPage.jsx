import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const LoginPage = () => {
    const [userInput,setUserInput]=useState("");
    const[passwordInput,setPasswordInput]=useState("");
    const navigate=useNavigate();
    const submitResult=()=>{
       if(userInput==="nikita" && passwordInput==="sachan"){
      navigate("/home");
       }else{
        alert("Invalid Credentials");
       }
    };
  return (
  <div className="min-h-screen flex items-center justify-center bg-[#061015] px-4">
  <div className="bg-[#0B1A20]/40 border border-gray-600 p-10 rounded-2xl w-full max-w-sm shadow-2xl mx-auto">

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-[#122329] text-white pl-4 pr-4 py-3 rounded-full focus:ring-2 focus:ring-blue-500 outline-none"
            value={userInput}
            onChange={(e)=>setUserInput(e.target.value)}
          />
        </div> 

        <div className="relative mb-8">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#122329] text-white pl-4 pr-4 py-3 rounded-full focus:ring-2 focus:ring-blue-500 outline-none"
            value={passwordInput}
            onChange={(e)=>setPasswordInput(e.target.value)}
          />
        </div>

        <button 
        className="w-full py-3 bg-gray-300 rounded-full text-black font-semibold tracking-wide hover:bg-gray-200 transition"
        onClick={submitResult}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};
