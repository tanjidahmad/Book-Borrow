


"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
      className="h-[50vh] sm:h-[60vh] md:h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"
    >
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          
          {/* Title Animation */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-xl sm:max-w-2xl animate__animated animate__fadeInDown">
            Explore the World of Books
          </h1>

          {/* Subtitle Animation */}
          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-md sm:max-w-xl text-gray-200 animate__animated animate__fadeInUp animate__delay-1s">
            Discover, read, and enjoy thousands of books from different genres.
          </p>

          {/* Button Animation */}
          <div className="flex flex-wrap gap-3 animate__animated animate__zoomIn animate__delay-2s">
            <Link href="/all-books">
              <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition">
                Browse Now
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;