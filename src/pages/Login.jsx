import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-24 mb-10 cursor-not-allowed">Admin Only</h1>

            <div className="flex justify-center mt-2">
                <input
                    className="border border-[#AF8260] rounded text-left py-3 pr-20 pl-2 placeholder-neutral-800 placeholder-opacity-25"
                    type="email" 
                    id="email" 
                    placeholder="admin@only.com">
                </input>
            </div>

            <div className="flex justify-center mt-6">
                <input
                    className="border border-[#AF8260] rounded text-left py-3 pr-20 pl-2 placeholder-neutral-800 placeholder-opacity-25"
                    type="password" 
                    id="password" 
                    placeholder="What's the hex?">
                </input>
            </div>

            <div className="flex justify-center mt-8">
                <button
                type="submit"
                className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase"><Link to="/admin">Let Me In</Link></button>
            </div>
        </div>
    );
};

export default Login;