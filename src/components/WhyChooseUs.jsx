"use client";

import { Card } from "@heroui/react";
import { FaBookOpen, FaBolt, FaLock } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="text-gray-500 mt-2">
          We make reading simple and enjoyable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        <Card className="p-6 text-center hover:-translate-y-1 transition">
          <FaBookOpen className="text-4xl mx-auto text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Huge Collection</h3>
          <p className="text-gray-500 mt-2">
            Thousands of books across multiple categories
          </p>
        </Card>

        <Card className="p-6 text-center hover:-translate-y-1 transition">
          <FaBolt className="text-4xl mx-auto text-yellow-500 mb-3" />
          <h3 className="text-xl font-semibold">Fast Borrowing</h3>
          <p className="text-gray-500 mt-2">
            Borrow books instantly with one click
          </p>
        </Card>

        <Card className="p-6 text-center hover:-translate-y-1 transition">
          <FaLock className="text-4xl mx-auto text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold">Secure System</h3>
          <p className="text-gray-500 mt-2">
            Your data is protected with modern authentication
          </p>
        </Card>

      </div>
    </section>
  );
}