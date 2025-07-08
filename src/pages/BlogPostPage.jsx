import React from "react";

const BlogPostPage = () => {
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
                    <img src="https://images.unsplash.com/photo-1609828435263-e9dc691d630b?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="-" className="w-full h-full object-cover rounded"></img>
                </div>

                <div className="mx-auto text-center max-w-xl mb-6">
                    <h2 className="text-[#54473F] italic text-5xl font-serif leading-normal">The Lore Behind the Crow</h2>
                    <h3 className="mt-6 text-[#AF8260] italic text-2xl font-serif">They're called a murder for a reason.</h3>
                    <p className="mt-6 text-[#54473F] font-light text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lacus tempus, iaculis mauris vitae, ullamcorper neque. Nullam et est quis mi imperdiet faucibus. Praesent ut arcu bibendum, elementum ex quis, aliquam augue.
                        <br /><br />
                        Ut neque dolor, vehicula id est at, lacinia eleifend elit. Nullam dapibus metus dictum sapien auctor, sed malesuada justo euismod. Phasellus commodo enim scelerisque enim pellentesque, eu ornare ante rutrum. Etiam in convallis purus. Suspendisse finibus nisl a eleifend luctus.
                        <br/><br />
                        Nullam non pharetra sem. Sed eget ante vel erat molestie malesuada ut a arcu. Donec faucibus tellus dapibus, congue nibh ac, congue dolor. Suspendisse interdum leo at purus euismod, a placerat lorem efficitur. In tincidunt suscipit magna eu porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lacus tempus, iaculis mauris vitae, ullamcorper neque. Nullam et est quis mi imperdiet faucibus. Praesent ut arcu bibendum, elementum ex quis, aliquam augue.
                        <br /><br />
                        Ut neque dolor, vehicula id est at, lacinia eleifend elit. Nullam dapibus metus dictum sapien auctor, sed malesuada justo euismod. Phasellus commodo enim scelerisque enim pellentesque, eu ornare ante rutrum. Etiam in convallis purus. Suspendisse finibus nisl a eleifend luctus.
                        <br/><br />
                        Nullam non pharetra sem. Sed eget ante vel erat molestie malesuada ut a arcu. Donec faucibus tellus dapibus, congue nibh ac, congue dolor. Suspendisse interdum leo at purus euismod, a placerat lorem efficitur. In tincidunt suscipit magna eu porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage