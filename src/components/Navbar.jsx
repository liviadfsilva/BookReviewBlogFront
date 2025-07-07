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
                                <Link to="/book-reviews/5-stars" className="block hover:text-[#AF8260] text-lg">
                                5-Star Reviews
                                </Link>
                            </li>
                            <li className="relative group">
                                <span className="block cursor-pointer hover:text-[#AF8260] text-lg">
                                    Categories
                                </span>
                                
                                <ul className="absolute left-full top-0 mt-0 ml-2 bg-white py-2 px-4 border border-[#54473F]/10 rounded shadow-md space-y-2 z-20 hidden group-hover:block min-w-max">
                                    <li>
                                    <Link to="/book-reviews/categories/horror" className="block hover:text-[#AF8260]">
                                        Horror
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/book-reviews/categories/fantasy" className="block hover:text-[#AF8260]">
                                        Fantasy
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/book-reviews/categories/mystery" className="block hover:text-[#AF8260]">
                                        Mystery / Thriller
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/book-reviews/categories/romance" className="block hover:text-[#AF8260]">
                                        Romance
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/book-reviews/categories/scifi" className="block hover:text-[#AF8260]">
                                        Science Fiction
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/book-reviews/categories/nonfiction" className="block hover:text-[#AF8260]">
                                        Non-fiction
                                    </Link>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                        )}
                        </li>

                    <li>
                        <Link to="/about" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">About</Link>
                    </li>

                    <li>
                        <Link to="/random-musings/all-posts" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Blog</Link>
                    </li>

                    <li>
                        <Link to="/contact" className="hover:bg-[#e7cbb6] ml-10 px-3 py-1">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar