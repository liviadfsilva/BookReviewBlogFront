import React from "react";

const Recentposts = () => {
  return (
    <div className="pb-36">
      <h1 className="text-[#AF8260] text-center animate-bounce mt-14">↓</h1>
      <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">Most Recent Reviews</h2>
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
    </div>
  );
};

export default Recentposts;
