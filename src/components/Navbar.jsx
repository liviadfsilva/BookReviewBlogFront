import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <nav className="text-[#54473F]  w-full">
            <div className="flex justify-center mt-6">
                <ul className="flex space-x-10 text-lg uppercase divide-x divide-[#AF8260]">
                    <li>
                        <Link to="/" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Home</Link>
                    </li>

                    <li className="relative">
                        {/* BOOK REVIEWS DROPDOWN TOGGLE */}
                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="hover:bg-[#e7cbb6] uppercase ml-10 px-3 py-1 -mt-1"
                        >
                            Book Reviews
                        </button>

                        {/* SIMPLE DROPDOWN MENU */}
                        {openDropdown && (
                            <ul className="absolute mt-2 bg-white py-2 px-4 border border-[#54473F]/10 rounded shadow-md space-y-2 z-10 min-w-max">
                                <li>
                                    <Link to="/book-reviews/all-reviews" className="block hover:text-[#AF8260] text-lg">
                                    All Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/book-reviews/5-star-reviews" className="block hover:text-[#AF8260] text-lg">
                                    5-Star Reviews
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/book-reviews/rating-system" className="block hover:text-[#AF8260] text-lg">
                                    Rating System
                                    </Link>
                                </li>
                            </ul>
                        )}
                        </li>

                    <li>
                        <Link to="/about" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">About</Link>
                    </li>

                    <li>
                        <Link to="/book-tracker" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Book Tracker</Link>
                    </li>

                    <li>
                        <Link to="/random-musings/all-posts" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar