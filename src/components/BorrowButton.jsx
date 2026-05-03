"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function BorrowButton() {
  const router = useRouter();
   const [message, setMessage] = useState(""); 

  const handleBorrow = async () => {
    // 🔥 real session check
    const session = await authClient.getSession();

    if (!session?.data) {
       setMessage("Please login to borrow this book");
      router.push("/signin");
      return;
    }

    setMessage("Book Borrowed Successfully!");
  };

   return (
    <div> {/* 🔧 ADD wrapper */}

      <button
        onClick={handleBorrow}
        className="btn btn-primary w-fit"
      >
        Borrow This Book
      </button>

      {/* 🔧 ADD message show */}
      {message && (
        <p className="mt-2 text-sm text-green-600">
          {message}
        </p>
      )}

    </div>
  );
}