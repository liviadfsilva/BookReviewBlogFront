import React from "react";
import { Link } from "react-router-dom";

const MusingsPosts = () => {
  return (
    <div>
      <h1 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">Most Recent Musings</h1>
      <div className="flex justify-center gap-16 mt-8">
        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1609828435263-e9dc691d630b?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
          <h2 className="text-[#AF8260] italic text-2xl font-serif mt-4">The Lore Behind the Crow</h2>
          <p className="text-[#AF8260] mt-1">They're called a murder for a reason.</p>
        </div>
        
        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww" alt="-" className="w-full h-full object-cover rounded"></img>
          <h2 className="text-[#AF8260] italic text-2xl font-serif mt-4">Inside the Mind of a Cat</h2>
          <p className="text-[#AF8260] mt-1">What do they think?</p>
        </div>

        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
          <h2 className="text-[#AF8260] italic text-2xl font-serif mt-4">The Best Brownie Recipe</h2>
          <p className="text-[#AF8260] mt-1">It's to die for.</p>
        </div>
      </div>
      <div className="mt-36 flex justify-center mb-6">
        <button className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase"><Link to="/book-reviews">More Posts ➛</Link></button>
      </div>
    </div>
  );
};

export default MusingsPosts;
