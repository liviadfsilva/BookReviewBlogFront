import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
    return (
        <div>
            <h1 className="text-[#AF8260] text-center animate-bounce mt-14">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 9"
                className="w-10 h-10 inline-block fill-current text-[#AF8260]"
            >
                <path
                d="M2 0c-.55 0-1.04.23-1.41.59-.36.36-.59.85-.59 1.41 0 .55.23 1.04.59 1.41l3.41 3.41 3.41-3.41c.36-.36.59-.85.59-1.41 0-.55-.23-1.04-.59-1.41-.36-.36-.85-.59-1.41-.59-.55 0-1.04.23-1.41.59-.36.36-.59.85-.59 1.41 0-.55-.23-1.04-.59-1.41-.36-.36-.85-.59-1.41-.59z"
                transform="translate(0 1)"
                />
            </svg>
            </h1>

            <div className="text-center">
                <h2 className="text-[#54473F] uppercase italic text-5xl font-serif mt-10 mb-12">Welcome Back!</h2>
                <h3 className="text-[#AF8260] italic text-2xl font-serif">What's on your mind today?</h3>
            </div>

            <div className="flex justify-center mt-12">
                <button className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase">
                    <Link to="/make-book-review">New Book Review</Link>
                </button>

                <button className="bg-[#e7cbb6] p-4 py-3 px-6 ml-16 rounded text-[#54473F] font-semibold text-base uppercase">
                    <Link to="/make-blog-post">New Blog Post</Link>
                </button>
            </div>
        </div>
    );
};

export default AdminHome;