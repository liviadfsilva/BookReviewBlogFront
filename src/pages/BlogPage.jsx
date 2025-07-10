import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const posts = [
    {
        id: 1,
        title: "My Favorite Horror Movies",
        subtitle: "I never get tired of them. Ever!",
        image: "https://images.unsplash.com/photo-1729660220527-83a3bba2338d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Theory of Relativity",
        subtitle: "Time is an illusion",
        image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "The Benefits of Journaling",
        subtitle: "It can drastically improve your mental health.",
        image: "https://images.unsplash.com/photo-1513666639414-f795d25747a8?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        title: "Stardew Valley 101",
        subtitle: "How to master the early game phase.",
        image: "https://play-lh.googleusercontent.com/He92papZcOmkgTi1sLHXQQb02aoyRtJ8ml96njM_cSAcpHhILvxMjhLix4mYEIKXPq4=w240-h480-rw",
    },
    {
        id: 5,
        title: "The Lore Behind the Crow",
        subtitle: "They're called a murder for a reason.",
        image: "https://images.unsplash.com/photo-1609828435263-e9dc691d630b?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        title: "Inside the Mind of a Cat",
        subtitle: "What do they think?",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
    },
    {
        id: 7,
        title: "The Best Brownie Recipe",
        subtitle: "It's do die for.",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
            <div className="h-[350px] overflow-hidden rounded">
                <img src={post.image} className="w-full h-full object-cover rounded"/>
            </div>

            <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">
                <Link to="/blog-post/1">{post.title}</Link>
            </h3>
            <p className="text-[#AF8260] mt-1">
              {post.subtitle}
            </p>

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
