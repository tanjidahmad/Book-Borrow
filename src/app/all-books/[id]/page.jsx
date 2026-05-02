

import Image from "next/image";
import BorrowButton from "@/components/BorrowButton";

const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('http://localhost:3000/data.json')
    const books = await res.json()

    const book = books.find(p => p.id == id)



    return (
  <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">

    {/* 📚 LEFT: IMAGE */}
    <div>
      <Image
        src={book?.image_url}
        alt={book?.title}
        width={400}
        height={500}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* 📖 RIGHT: DETAILS */}
    <div className="flex flex-col justify-center">

      <h1 className="text-3xl font-bold mb-4">{book?.title}</h1>

      <p className="text-gray-600 mb-2">
        <strong>Author:</strong> {book?.author}
      </p>

      <p className="mb-4">{book?.description}</p>

      <p className="mb-6 font-semibold text-green-600">
        {book?.available_quantity} copies left
      </p>

              <BorrowButton  />


    </div>
  </div>

    );
};

export default PhotoDetailsPage;