import React from "react";
import { Link } from "react-router-dom";

const RecentPosts = () => {
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
      <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">Fresh On The Shelf</h2>
      <div className="flex justify-center gap-24 mt-8">
        <div className="w-[340px] aspect-[2/3]">
          <img src="https://m.media-amazon.com/images/I/71M937NDDtL._UF1000,1000_QL80_.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
          <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">White horse Black Nights by Evie Marceau: Book Review</h3>
        </div>
        
        <div className="w-[340px] aspect-[2/3]">
          <img src="https://m.media-amazon.com/images/I/71f++uAekKL._UF1000,1000_QL80_.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
          <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">The Fabric of Our Souls by K. M. Moronova: Book Review</h3>
        </div>

        <div className="w-[340px] aspect-[2/3]">
          <img src="https://m.media-amazon.com/images/I/91zXBCFQSsL.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
          <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">The Sanatorium by Sarah Pearse: Book Review</h3>
        </div>

      </div>
      <div className="mt-16 flex justify-center mb-6">
        <button className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase"><Link to="/book-reviews">Older Reviews ➛</Link></button>
      </div>
    </div>
  );
};

export default RecentPosts;
