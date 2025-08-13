import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5001/api/blog-posts/${id}`)
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
    }, [id]);

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
                <div className="w-[450px] h-[450px]">
                    <img src={post.post_img} alt="-" className="w-full h-full object-cover rounded"></img>
                </div>

                <div className="mx-auto text-center max-w-xl mb-6">
                    <h2 className="text-[#54473F] italic text-5xl font-serif leading-normal">{post.title}</h2>
                    <h3 className="mt-6 text-[#AF8260] italic text-2xl font-serif">{post.subtitle}</h3>
                    <div className="mt-6 text-[#54473F] font-light text-left">
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