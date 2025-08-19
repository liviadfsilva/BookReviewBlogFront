import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/reviews/latest")
    .then((res) => res.json())
    .then((data) => setReviews(data))
    .catch((err) => console.error("Error fetching latest review:", err))
  }, []);

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
        {reviews.map((review) => (
          <div className="w-[340px] aspect-[2/3]">
            <Link
            to={`/book-review/${review.slug}`}
            >
              <img src={review.cover_url} alt="-" className="w-full h-full object-cover rounded"></img>
              <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">{review.title} by {review.author}</h3>
            </Link>
        </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center mb-6">
        <button className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase hover:bg-[#d5b89c]"><Link to="/book-reviews/all-reviews">Older Reviews ➛</Link></button>
      </div>
    </div>
  );
};

export default RecentPosts;
