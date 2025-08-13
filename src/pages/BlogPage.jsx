import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  console.log("posts state:", posts);

  useEffect(() => {
      fetch("http://localhost:5001/api/blog-posts/")
      .then(res => {
          if (!res.ok) {
              throw new Error("Failed to fetch posts.");
          }
          return res.json();
      })
      .then(data => setPosts(data.reverse()))
      .catch(err => console.error(err));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

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

      <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">LATEST THOUGHTS</h2>

      <div className="flex justify-center flex-wrap gap-x-24 gap-y-20 mt-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="w-[350px]">

            <Link
            to={`/blog/post/${post.id}`}
            >

              <div className="h-[350px] overflow-hidden rounded">
                <img src={post.post_img} className="w-full h-full object-cover rounded"/>
            </div>

            <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">
                {post.title}
            </h3>
            <p className="text-[#AF8260] mt-1">
              {post.subtitle}
            </p>
            
            </Link>

          </div>
        ))}
      </div>

      <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage} />
    </div>
  );
};

export default BlogPage;
