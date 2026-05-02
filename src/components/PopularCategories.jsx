"use client";

import { Card } from "@heroui/react";
import { FaBook, FaLaptopCode, FaFlask } from "react-icons/fa";

export default function PopularCategories() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Popular Categories</h2>
        <p className="text-gray-500 mt-2">
          Browse books by your favorite topics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        <Card className="p-6 text-center hover:scale-105 transition">
          <FaBook className="text-4xl mx-auto text-pink-500 mb-3" />
          <h3 className="text-xl font-semibold">Story</h3>
          <p className="text-gray-500 mt-2">
            Fiction, novels, and storytelling books
          </p>
        </Card>

        <Card className="p-6 text-center hover:scale-105 transition">
          <FaLaptopCode className="text-4xl mx-auto text-indigo-500 mb-3" />
          <h3 className="text-xl font-semibold">Tech</h3>
          <p className="text-gray-500 mt-2">
            Programming, AI, and modern technology
          </p>
        </Card>

        <Card className="p-6 text-center hover:scale-105 transition">
          <FaFlask className="text-4xl mx-auto text-green-500 mb-3" />
          <h3 className="text-xl font-semibold">Science</h3>
          <p className="text-gray-500 mt-2">
            Discover science and innovation
          </p>
        </Card>

      </div>
    </section>
  );
}