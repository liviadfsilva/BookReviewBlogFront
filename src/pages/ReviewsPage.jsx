import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";


const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 6;

    console.log("reviews state:", reviews);

    useEffect(() => {
        fetch("http://localhost:5001/api/reviews/")
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to fetch reviews.");
            }
            return res.json();
        })
        .then(data => {
            const sorted = data.sort((a, b) => b.id - a.id);
            setReviews(sorted);
        })
        .catch(err => console.error(err));
    }, []);

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

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

            <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">All Reviews</h2>

            
            <div className="flex justify-center flex-wrap gap-x-24 gap-y-16 my-8">
                {currentReviews.map((review) => (
                    <div key={review.slug} className="w-[340px]">
                        <Link 
                        to={`/book-review/${review.slug}`}
                        >
                            <div className="aspect-[2/3] overflow-hidden rounded block">
                                <img
                                src={review.cover_url}
                                className="w-full h-full object-cover rounded"
                                />
                            </div>

                        <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">
                            {review.title} by {review.author}: Book Review
                        </h3>
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

export default ReviewsPage;