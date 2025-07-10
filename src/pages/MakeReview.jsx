import React from "react";
import { useNavigate } from "react-router-dom";


const MakeReview = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate("/book-review/post/1");
    };

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

            <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">New Book Review</h2>

            <div className="flex justify-center mt-12 mb-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
                    <div className="flex gap-x-6">
                        <input 
                            type="text" 
                            id="book-title" 
                            placeholder="Book Title" 
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                        <input 
                            type="text" 
                            id="book-author" 
                            placeholder="Author" 
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                    </div>

                    <input 
                        type="url" 
                        id="book-cover" 
                        placeholder="Book Cover URL" 
                        className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                    </input>

                    <textarea
                        id="book-review"
                        placeholder="Book Review"
                        className="border border-[#AF8260] rounded p-4 h-[300px] resize-y placeholder-neutral-800 placeholder-opacity-25"
                        />


                    <div className="flex gap-x-6">
                        <input 
                            type="text" 
                            id="book-stars" 
                            placeholder="Book Rating" 
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                        <input 
                            type="text" 
                            id="book-spice" 
                            placeholder="Book Spice Rating" 
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>
                    </div>

                    <input
                        id="submit-review"
                        type="submit"
                        value="Submit Review"
                        className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase cursor-pointer">
                    </input>
                </form>
            </div>
        </div>
    );
};

export default MakeReview;