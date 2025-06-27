import React from "react";
import { Link } from "react-router-dom";

const Recentposts = () => {
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
      <div className="flex justify-center gap-12 mt-8">
        <div className="w-[400px] h-[400px]">
          <img src="https://starsandvellum.com/wp-content/uploads/2023/08/Haunting-Adeline-768x1024.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-3xl font-serif mt-5">Haunting Adeline by H. D. Carlton: Book Review</h1>
        </div>
        
        <div className="w-[400px] h-[400px]">
          <img src="https://starsandvellum.com/wp-content/uploads/2023/08/Haunting-Adeline-768x1024.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-3xl font-serif mt-5">Haunting Adeline by H. D. Carlton: Book Review</h1>
        </div>

        <div className="w-[400px] h-[400px]">
          <img src="https://starsandvellum.com/wp-content/uploads/2023/08/Haunting-Adeline-768x1024.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-3xl font-serif mt-5">Haunting Adeline by H. D. Carlton: Book Review</h1>
        </div>
      </div>
      <div className="mt-36 flex justify-center mb-6">
        <button className="bg-[#e7cbb6] p-4 py-4 px-8 rounded text-[#54473F] font-semibold text-xl"><Link to="/book-reviews">Older Reviews</Link></button>
      </div>
    </div>
  );
};

export default Recentposts;
