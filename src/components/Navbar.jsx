import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="text-[#54473F]  w-full">
            <div className="flex justify-center mt-6">
                <ul className="flex space-x-10 text-lg uppercase divide-x divide-[#AF8260]">
                    <li><Link to="/" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Home</Link></li>
                    <li><Link to="/book-reviews" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Book Reviews</Link></li>
                    <li><Link to="/about" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">About</Link></li>
                    <li><Link to="/blog" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Blog</Link></li>
                    <li><Link to="/contact" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar