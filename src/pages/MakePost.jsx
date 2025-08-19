import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MakePost = () => {
    const navigate = useNavigate();
    const { slug } = useParams();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [postImg, setPostImg] = useState("");
    const [musing, setMusing] = useState("");
    const [error, setError] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (slug) {
            axios.get(`http://localhost:5001/api/blog-posts/${slug}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
                const data = res.data;
                setTitle(data.title);
                setSubtitle(data.subtitle);
                setPostImg(data.post_img);
                setMusing(data.musing);
            })
            .catch(err => {
                console.error(err);
                setError("Failed to fetch post data.");
            });
        }
    }, [slug, token]);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
          let res;
          if (slug) {
              res = await axios.put(
                  `http://localhost:5001/api/blog-posts/${slug}`,
                  { title, subtitle, post_img: postImg, musing },
                  { headers: { Authorization: `Bearer ${token}` } }
              );
          } else {
              res = await axios.post(
                  "http://localhost:5001/api/blog-posts/",
                  { title, subtitle, post_img: postImg, musing },
                  { headers: { Authorization: `Bearer ${token}` } }
              );
          }

          const newPostSlug = res.data.updated_post?.slug || slug;
          navigate(`/blog/post/${newPostSlug}`);
      } catch (err) {
          console.error(err);
          setError(err.response?.data?.error || "Failed to save post.");
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

            <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">
              {slug ? "Edit Blog Post" : "New Blog Post"}
            </h2>

            <div className="flex justify-center mt-12 mb-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
                    <div className="flex gap-x-6">
                        <input 
                            type="text" 
                            placeholder="Post Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                        <input 
                            type="text" 
                            placeholder="Subtitle"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            required
                            className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                        </input>

                    </div>

                    <input 
                        type="url"
                        placeholder="Post Image URL"
                        value={postImg}
                        onChange={(e) => setPostImg(e.target.value)}
                        required
                        className="border border-[#AF8260] rounded text-left py-3 pr-36 pl-2 placeholder-neutral-800 placeholder-opacity-25">
                    </input>

                    <textarea
                        value={musing}
                        placeholder="Musing"
                        onChange={(e) => setMusing(e.target.value)}
                        required
                        className="border border-[#AF8260] rounded p-4 h-[300px] resize-y placeholder-neutral-800 placeholder-opacity-25"
                    />

                    {error && <p className="text-red-600">{error}</p>}

                    <input
                        type="submit"
                        id="submit-review"
                        value="Submit Post"
                        className="bg-[#e7cbb6] p-4 py-3 px-6 rounded text-[#54473F] font-semibold text-base uppercase cursor-pointer text-center">
                    </input>
                </form>
            </div>
        </div>
    );
};

export default MakePost;