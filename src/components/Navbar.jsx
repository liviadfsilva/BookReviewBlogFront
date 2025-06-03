import React from "react";

const Navbar = () => {
    return (
        <nav className="text-[#54473F]  w-full divide-y divide-gray-400">
            <div className="flex justify-center pt-6">
                <ul className="flex space-x-10 text-lg uppercase divide-x divide-gray-400">
                    <li><a href="#" className="hover:underline pl-10">Home</a></li>
                    <li><a href="#" className="hover:underline pl-10">Book Reviews</a></li>
                    <li><a href="#" className="hover:underline pl-10">About</a></li>
                    <li><a href="#" className="hover:underline pl-10">Blog</a></li>
                    <li><a href="#" className="hover:underline pl-10">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar