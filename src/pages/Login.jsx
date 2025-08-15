import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        axios.post("http://localhost:5001/api/login", { email, password })
            .then(res => {

                localStorage.setItem("token", res.data.access_token);
                navigate("/admin");
            })
            .catch(err => {
                console.error(err);
                setError("Invalid email or password.");
            });
    };

    return (
        <div>
            <h1 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-24 mb-10 cursor-not-allowed">Admin Only</h1>

            <div className="flex justify-center mt-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
                    <input
                        className="border border-[#AF8260] rounded text-left py-3 pr-20 pl-2 placeholder-neutral-800 placeholder-opacity-25"
                        type="email" 
                        value={email}
                        placeholder="admin@only.com"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="border border-[#AF8260] rounded text-left py-3 pr-20 pl-2 placeholder-neutral-800 placeholder-opacity-25"
                        type="password" 
                        value={password} 
                        placeholder="What's the hex?"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="text-red-600 text-center">{error}</p>}

                    <input 
                    type="submit"
                    value="Let Me In"
                    className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase w-40 mx-auto cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;