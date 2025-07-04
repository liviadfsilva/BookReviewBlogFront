import React from "react";

const About = () => {
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
                <div className="w-[440px] aspect-[2/3]">
                    <img src="/images/IMG_7353.jpeg" alt="-" className="w-full h-full object-cover rounded"></img>
                </div>

                <div className="mx-auto text-center max-w-xl">
                    <h2 className="text-[#54473F] italic text-5xl font-serif">Hello, World!</h2>
                    <h3 className="mt-8 text-[#AF8260] italic text-2xl font-serif">Who am I?</h3>
                    <p className="mt-6 text-[#54473F] font-light text-left">
                        I'm Lily, a developer so passionate about books to the point of creating a web page to share my reviews.
                        <br /> <br />
                        To be completely honest, I'm not a huge fan of social media. And I despise the idea of having random people on random apps leaving awful comments on my reviews just because I said what I thought. My soul is ancient, I seek peace and a place to be myself without being bothered. That's why I created this blog.
                        <br /> <br />
                        Before I became a developer, I worked as a psychoanalyst. However, I left the field because I didn't agree with the way some things "had to be done." Yes, I am THAT opinionated. My mind is my own.
                        <br /> <br/>
                        When I'm not coding or reading, you'll probably find me playing Stardew Valley.
                        I'm also a cat mom, haughty cook, horror fan, lazy yogi & nature lover.
                        <br /> <br />
                        Welcome to my Haunted Musings!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;