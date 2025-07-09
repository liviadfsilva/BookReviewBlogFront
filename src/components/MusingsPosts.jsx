import React from "react";
import { Link } from "react-router-dom";

const MusingsPosts = () => {
  return (
    <div>
      <h1 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">Most Recent Musings</h1>
      <div className="flex justify-center gap-16 mt-8">
        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4"><Link to="/blog/post/1">Theory of Relativity</Link></h1>
          <p className="text-[#AF8260] mt-1">Time is an illusion.</p>
        </div>

        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1513666639414-f795d25747a8?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4"><Link to="/blog/post/1">The Benefits of Journaling</Link></h1>
          <p className="text-[#AF8260] mt-1">It can drastically improve your mental health.</p>
        </div>

        <div className="w-[350px] h-[350px]">
          <img src="https://play-lh.googleusercontent.com/He92papZcOmkgTi1sLHXQQb02aoyRtJ8ml96njM_cSAcpHhILvxMjhLix4mYEIKXPq4=w240-h480-rw" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4"><Link to="/blog/post/1">Stardew Valley 101</Link></h1>
          <p className="text-[#AF8260] mt-1">How to master the early game phase.</p>
        </div>
      </div>
      <div className="mt-36 flex justify-center mb-6">
        <button className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase"><Link to="/random-musings/all-posts">More Posts ➛</Link></button>
      </div>
    </div>
  );
};

export default MusingsPosts;
