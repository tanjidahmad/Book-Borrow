"use client";

import Marquee from "react-fast-marquee";

export default function BooksMarquee({ books }) {
  return (
    <div className="bg-gray-900/90 text-white py-3 mt-6">
      <Marquee pauseOnHover={true} speed={60}>
        <span className="mx-6">
          New Arrivals:
        </span>

        {books?.slice(0, 12).map((book) => (
          <span key={book.id} className="mx-6">
            {book.title} |
          </span>
        ))}

        <span className="mx-6">
          Special Discount on Memberships 
        </span>
      </Marquee>
    </div>
  );
}