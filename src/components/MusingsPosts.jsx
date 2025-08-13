import React from "react";
import { Link } from "react-router-dom";

const MusingsPosts = () => {
  return (
    <div>
      <h1 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">Most Recent Musings</h1>
      <div className="flex justify-center gap-16 mt-8">

        <div className="w-[350px] h-[350px]">
          <Link
          to="/blog/post/1"
          >
            <img src="https://images.unsplash.com/photo-1729660220527-83a3bba2338d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
            <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4">My Favorite Horror Movies</h1>
            <p className="text-[#AF8260] mt-1">I never get tired of them. Ever!</p>
          </Link>
        </div>

        <div className="w-[350px] h-[350px]">
          <Link
          to="/blog/post/1"
          >
            <img src="https://images.unsplash.com/photo-1729660220527-83a3bba2338d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
            <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4">My Favorite Horror Movies</h1>
            <p className="text-[#AF8260] mt-1">I never get tired of them. Ever!</p>
          </Link>
        </div>

        <div className="w-[350px] h-[350px]">
          <Link
          to="/blog/post/1"
          >
            <img src="https://images.unsplash.com/photo-1729660220527-83a3bba2338d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
            <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4">My Favorite Horror Movies</h1>
            <p className="text-[#AF8260] mt-1">I never get tired of them. Ever!</p>
          </Link>
        </div>
      </div>
      <div className="mt-36 flex justify-center mb-6">
        <button className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase"><Link to="/blog/all-posts">More Posts ➛</Link></button>
      </div>
    </div>
  );
};

export default MusingsPosts;
