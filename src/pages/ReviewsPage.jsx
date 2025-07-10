import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const reviews = [
    {
        id: 1,
        title: "Let Me In",
        author: "John Ajvide Lindqvist",
        image: "https://m.media-amazon.com/images/I/71DCQpyjfeL._SL1500_.jpg",
    },
    {
        id: 2,
        title: "White Horse Black Nights",
        author: "Evie Marceau",
        image: "https://m.media-amazon.com/images/I/71M937NDDtL._UF1000,1000_QL80_.jpg",
    },
    {
        id: 3,
        title: "The Fabric of Our Souls",
        author: "K. M. Moronova",
        image: "https://m.media-amazon.com/images/I/71f++uAekKL._UF1000,1000_QL80_.jpg",
    },
    {
        id: 4,
        title: "The Sanatorium",
        author: "Sarah Pearse",
        image: "https://m.media-amazon.com/images/I/91zXBCFQSsL.jpg",
    },
    {
        id: 5,
        title: "Lore Olympus Vol. II",
        author: "Rachel Smythe",
        image: "https://m.media-amazon.com/images/I/81hgMa0Bh1L._SL1500_.jpg",
    },
    {
        id: 6,
        title: "Katie the Catsitter",
        author: "Colleen AF Venable",
        image: "https://m.media-amazon.com/images/I/91JxHUo8juL._SL1500_.jpg",
    },
    {
        id: 7,
        title: "The Never King",
        author: "Nikki St. Crowe",
        image: "https://m.media-amazon.com/images/I/91eHSa0sVYL._SL1500_.jpg", 
    },
    {
        id: 8,
        title: "Lore Olympus Vol. I",
        author: "Rachel Smythe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PUUpaaL3zpElV2sckEZFJCZVmRK2ITTEYGSLORERwuO7t0KX", 
    }
];

const ReviewsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 6;

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
                    <div key={review.id} className="w-[340px]">
                        <div className="aspect-[2/3] overflow-hidden rounded">
                            <img src={review.image} className="w-full h-full object-cover rounded"/>
                        </div>

                        <h3 className="text-[#AF8260] italic text-2xl font-serif mt-4">
                            <Link to="/book-review/post/1">{review.title} by {review.author}: Book Review</Link>
                        </h3>
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