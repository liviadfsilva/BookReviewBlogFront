import React from "react";

const BlogPage = () => {
  return (
    <div className="pb-28">
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
      <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">LATEST THOUGHTS</h2>
      <div className="flex justify-center gap-16 mt-8">
        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1609828435263-e9dc691d630b?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4">The Lore Behind the Crow</h1>
          <p className="text-[#AF8260] mt-1">They're called a murder for a reason.</p>
        </div>
        
        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4">Inside the Mind of a Cat</h1>
          <p className="text-[#AF8260] mt-1">What do they think?</p>
        </div>

        <div className="w-[350px] h-[350px]">
          <img src="https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
          <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4">The Best Brownie Recipe</h1>
          <p className="text-[#AF8260] mt-1">It's to die for.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
