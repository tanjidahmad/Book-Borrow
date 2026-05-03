"use client";

import Marquee from "react-fast-marquee";

export default function BooksMarquee({ books }) {
  return (
    <div className="bg-gray-900/90 text-white py-2 sm:py-3 mt-4 sm:mt-6">
      <Marquee pauseOnHover={true} speed={50}>
        <span className="mx-3 sm:mx-6 text-sm sm:text-base font-medium">
          New Arrivals:
        </span>

        {books?.slice(0, 12).map((book) => (
          <span key={book.id} className="mx-3 sm:mx-6 text-xs sm:text-sm md:text-base">
            {book.title} |
          </span>
        ))}

        <span className="mx-3 sm:mx-6 text-sm sm:text-base font-medium">
          Special Discount on Memberships 
        </span>
      </Marquee>
    </div>
  );
}