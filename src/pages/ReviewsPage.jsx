import React from "react";
import { Link } from "react-router-dom";

const ReviewsPage = () => {
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

            <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">All Reviews</h2>

            <div className="flex justify-center gap-24 mt-8">
                <div className="w-[340px] aspect-[2/3]">
                <img src="https://m.media-amazon.com/images/I/71M937NDDtL._UF1000,1000_QL80_.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
                <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4"><Link to="/book-review/post/1">White horse Black Nights by Evie Marceau: Book Review</Link></h1>
                </div>
                
                <div className="w-[340px] aspect-[2/3]">
                <img src="https://m.media-amazon.com/images/I/71f++uAekKL._UF1000,1000_QL80_.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
                <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4"><Link to="/book-review/post/1">The Fabric of Our Souls by K. M. Moronova: Book Review</Link></h1>
                </div>

                <div className="w-[340px] aspect-[2/3]">
                <img src="https://m.media-amazon.com/images/I/91zXBCFQSsL.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
                <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4"><Link to="/book-review/post/1">The Sanatorium by Sarah Pearse: Book Review</Link></h1>
                </div>
            </ div>
        </div>
    );
};

export default ReviewsPage;