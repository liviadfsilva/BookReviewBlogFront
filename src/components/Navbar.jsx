import React from "react";

const Navbar = () => {
    return (
        <nav className="text-[#54473F]  w-full">
            <div className="flex justify-center mt-6">
                <ul className="flex space-x-10 text-lg uppercase divide-x divide-[#AF8260]">
                    <li><a href="#" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Home</a></li>
                    <li><a href="#" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Book Reviews</a></li>
                    <li><a href="#" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">About</a></li>
                    <li><a href="#" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Blog</a></li>
                    <li><a href="#" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar