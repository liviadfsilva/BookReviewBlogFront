import React from "react";
import { FaCampground, FaCity, FaHeart, FaTheaterMasks, FaBookOpen, FaUserSecret, FaNewspaper, FaScroll, FaGraduationCap } from "react-icons/fa";
import { GiCarousel, GiCrossedSwords, GiCandleFlame, GiDrop, GiLightThornyTriskelion, GiBrokenSkull, GiGreekTemple, GiChiliPepper, GiAstronautHelmet } from "react-icons/gi";

const Categories = () => {
    return (
        <div className="pb-12">
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

            <h2 className="text-[#54473F] uppercase italic text-5xl text-center font-serif mt-10 mb-12">Categories</h2>

            <div className="flex justify-center flex-wrap gap-y-24 mt-16">
                <div className="basis-[30%] flex flex-col items-center">
                    <FaCampground className="text-9xl text-[#54473F]"/>
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Adventure</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiCarousel className="text-9xl text-[#54473F]"/>
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Children's</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaCity className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Contemporary</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiLightThornyTriskelion className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Dark Romance</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaTheaterMasks className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Drama</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiChiliPepper className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Erotica</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiCrossedSwords className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Fantasy</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaBookOpen className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Graphic Novel</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiGreekTemple className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Historical</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiDrop className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Horror</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaUserSecret className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Mystery</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaNewspaper className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Nonfiction</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaScroll className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Poetry</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaHeart className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Romance</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiAstronautHelmet className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Science Fiction</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiCandleFlame className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Spirituality</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <GiBrokenSkull className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Thriller</p>
                </div>

                <div className="basis-[30%] flex flex-col items-center">
                    <FaGraduationCap className="text-9xl text-[#54473F]" />
                    <p className="flex justify-center text-[#AF8260] italic text-xl font-serif mt-6">Young Adult</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;