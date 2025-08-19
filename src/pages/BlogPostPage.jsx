import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPostPage = () => {
    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-post/${post.slug}`);
    };

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if (!confirmed) return;

        try {
            const response = await fetch(`http://localhost:5001/api/blog-posts/${post.slug}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

            if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to delete review.");
        }

            const data = await response.json();
            console.log(data.msg);

            navigate("/blog/all-posts");
        } catch (error) {
            console.error("Error deleting review:", error);
            alert(error.message);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:5001/api/blog-posts/${slug}`)
        .then(res => {
            if (!res.ok) {
            throw new Error("Failed to fetch review.");
            }
            return res.json();
        })
        .then(data => {
            setPost(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, [slug]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (!post) {
        return <p>Post not found.</p>;
    }

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

            <div className="flex items-start ml-40 mt-6">
                <div className="flex flex-col w-[450px]">
                    <img
                        src={post.post_img}
                        alt="-"
                        className="w-full h-[450px] object-cover rounded"
                    />

                    {isLoggedIn && (
                        <div className="mt-6 flex justify-center gap-10"> 
                            <button
                                onClick={handleEdit}
                                className="w-40 bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold uppercase hover:bg-[#d5b89c]"
                                >
                                Edit Post
                            </button>

                            <button
                                onClick={handleDelete}
                                className="w-40 bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold uppercase hover:bg-[#d5b89c]"
                                >
                                Delete Post
                            </button>
                        </div>
                    )}
                </div>

                <div className="mx-auto text-center max-w-xl mb-6">
                    <h2 className="text-[#54473F] italic text-5xl font-serif leading-normal">{post.title}</h2>
                    <h3 className="mt-6 text-[#AF8260] italic text-2xl font-serif">{post.subtitle}</h3>
                    <div className="mt-6 text-[#54473F] font-light text-left whitespace-pre-line">
                        <p>
                            {post.musing}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage