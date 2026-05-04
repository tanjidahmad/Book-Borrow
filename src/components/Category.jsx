



import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  const res = await fetch("https://book-borrow-delta.vercel.app/cattegory.json");
  const categories = await res.json();

  return (
    <div className="mb-5 flex flex-col gap-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          <Button variant="outline" size="sm" className="w-full justify-center">
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;




