import React from "react";

export default function QuoteSection() {
  return (
    <section className="bg-[#f5ebe0] w-full py-12 px-6 my-12">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl italic text-[#54473F] font-serif">
          “One of my greatest pleasures is falling into a story someone else has written.”
        </blockquote>
        <p className="mt-4 text-[#AF8260] font-medium">— Nora Roberts</p>
      </div>
    </section>
  );
}
