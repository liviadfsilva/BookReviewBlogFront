import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MakeReview = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const [spiceRating, setSpiceRating] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [allTags, setAllTags] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTags = async () => {
        try {
            const res = await axios.get("http://localhost:5001/api/tags/");
            setAllTags(res.data);
        } catch (err) {
            console.error("Failed to load tags", err);
        }
        };
        fetchTags();
    }, []);

    const handleTagChange = (tagId) => {
        tagId = Number(tagId);
        if (selectedTags.includes(tagId)) {
        setSelectedTags(selectedTags.filter((id) => id !== tagId));
        } else {
        if (selectedTags.length < 3) {
            setSelectedTags([...selectedTags, tagId]);
        } else {
            alert("You can select up to 3 tags only.");
        }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const token = localStorage.getItem("token");
        if (!token) {
            setError("You must be logged in to post.");
            return;
        }

        const tag_ids = selectedTags
        const spice_rating_value = spiceRating.trim() === "" ? null : Number(spiceRating);

        try {
            const res = await axios.post(
                "http://localhost:5001/api/reviews/",
                { title, author, cover_url: coverUrl, review, rating, spice_rating: spice_rating_value, tag_ids },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const newReviewId = res.data.new_review.id;
            navigate(`/book-review/${newReviewId}`);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || "Failed to create review.");
        }
    };

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

            <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">New Book Review</h2>

            <div className="flex justify-center mt-12 mb-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
                    <div className="flex gap-x-6">
                        <input 
                            type="text" 
                            placeholder="Book Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                        <input 
                            type="text"
                            placeholder="Author"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            required
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                    </div>

                    <input 
                        type="url"
                        placeholder="Book Cover URL"
                        value={coverUrl}
                        onChange={e => setCoverUrl(e.target.value)}
                        required
                        className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                    </input>

                    <textarea
                        placeholder="Book Review"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                        required
                        className="border border-[#AF8260] rounded p-4 h-[300px] resize-y placeholder-neutral-800 placeholder-opacity-25"
                        />


                    <div className="flex gap-x-6">
                        <input 
                            type="text"
                            placeholder="Book Rating"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            required
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                        <input 
                            type="text"
                            placeholder="Book Spice Rating"
                            value={spiceRating}
                            onChange={e => setSpiceRating(e.target.value)}
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>
                    </div>

                    <div className="columns-3 gap-32">
                        {allTags.map(tag => (
                            <div key={tag.id} className="w-[33.33%] mb-2 whitespace-nowrap">
                            <label className="inline-flex items-center gap-2">
                                <input
                                type="checkbox"
                                value={tag.id}
                                checked={selectedTags.includes(tag.id)}
                                onChange={() => handleTagChange(tag.id)}
                                className="accent-[#AF8260]"
                                />
                                <span>{tag.name}</span>
                            </label>
                            </div>
                        ))}
                    </div>

                    {error && <p className="text-red-600">{error}</p>}

                    <input
                        id="submit-review"
                        type="submit"
                        value="Submit Review"
                        className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase cursor-pointer">
                    </input>
                </form>
            </div>
        </div>
    );
};

export default MakeReview;