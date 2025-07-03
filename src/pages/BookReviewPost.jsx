import React from "react";

const BookReviewPost = () => {
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
                    <img src="https://m.media-amazon.com/images/I/71M937NDDtL._UF1000,1000_QL80_.jpg" alt="-" className="w-full h-full object-cover rounded"></img>
                    <h2 className="text-[#AF8260] italic text-3xl font-serif leading-loose mt-2">Rating: ⭐️ ⭐️ ⭐️ ⭐️ <br /> Spice Level: 🌶️ 🌶️ 🌶️</h2>
                </div>

                <div className="mx-auto text-center max-w-xl">
                    <h3 className="text-[#54473F] italic text-5xl font-serif leading-normal">White Horse Black Nights <br/> by Evie Marceau</h3>
                    <h4 className="mt-6 text-[#AF8260] italic text-2xl font-serif">Book Review</h4>
                    <p className="mt-6 text-[#54473F] font-light text-left">
                        I love it when I go completely blind into a book and it surprises me in a very good way. I'm back to my audiobook era and this one did the trick for me.
                        <br /> <br />
                        To begin with, I absolutely loved it that Sabine’s godkiss is the ability to speak with animals. I mean, who never wished they could do that? I know I did — and still do, mind you. And I loved even more the fact that Basten’s godkiss is sharpened senses, for I think this makes things much more interesting between FMC and MMC. I’ve always had good experiences when it came to this — mind-readers, heightened senses… they never fail to entice me.
                        <br /> <br />
                        I must admit that, for a moment, I thought the whole book would be about their journey to Astagnon and their journey only, especially for being the first book in the series, so it was a delightful surprise when I realized that wouldn’t be the case.
                        The tension between Sabine and Wolf kept me on my toes. I’m such a sucker for the “there’s only one bed” trope. We all know what comes next, even if it’s temporarily delayed by a fire (*wink wink*).
                        <br /> <br />
                        Now, talking about Sabine’s father’s letter… the first time Wolf read it (considering he went over it a hundred times), I never would’ve imagined the twist that it contained — and the fact that it was revealed in the end of the book sure piqued my interest regarding book two.
                        <br /> <br />
                        Nonetheless, speaking of the letter, there it is something I quite despise in romance books — the lack of communication. Sure, sure, it’s just a book, it needs a plot, but… GRRRRRR. I can’t take it!!! I hate it when people hurt each other by lying and hiding not only their true feelings but also information about their lives that they own the right to know.
                        <br /> <br />
                        Another thing that gets me every time as well is the smut. I sought it and I found it, so that made me pretty content when things started escalating between them, but I can’t help feeling slightly frustrated about how first times are portrayed. Most women can’t orgasm with penetration only, it just doesn’t make sense to me that a woman who just lost her virginity is able to enjoy it, want it again once it’s over, and cum so easily.
                        <br /> <br />
                        I’m aware that every experience is unique, it just didn’t make a lot of sense to me. Overall, it was an enjoyable read. The ending really got me. I’m glad that Sabine found out what was that voice she started hearing. And I truly hope she protects the poor beast at all costs, regardless of the new “game” she’ll play with her soon-to-be husband.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default BookReviewPost;