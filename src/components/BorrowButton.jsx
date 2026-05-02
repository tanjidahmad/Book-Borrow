"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function BorrowButton() {
  const router = useRouter();

  const handleBorrow = async () => {
    // 🔥 real session check
    const session = await authClient.getSession();

    if (!session?.data) {
      router.push("/signin");
      return;
    }

    alert("Book Borrowed Successfully!");
  };

  return (
    <button
      onClick={handleBorrow}
      className="btn btn-primary w-fit"
    >
      Borrow This Book
    </button>
  );
}