import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MusingsPosts = () => {
  const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5001/api/blog-posts/latest")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching latest review:", err))
    }, []);

  return (
    <div>
      <h1 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">Most Recent Musings</h1>

      <div className="flex justify-center gap-16 mt-8">
        {posts.map((post) => (
          <div className="w-[350px] h-[350px]">
            <Link
            to={`/blog/post/${post.slug}`}
            >
              <img src={post.post_img} alt="-" className="w-full h-full object-cover rounded"></img>

              <h1 className="text-[#AF8260] italic text-2xl font-serif mt-4">{post.title}</h1>
              <p className="text-[#AF8260] mt-1">{post.subtitle}</p>
            </Link>
        </div>
        ))}
      </div>

      <div className="mt-32 flex justify-center mb-6">
        <button className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase hover:bg-[#d5b89c]"><Link to="/blog/all-posts">More Posts ➛</Link></button>
      </div>
    </div>
  );
};

export default MusingsPosts;
