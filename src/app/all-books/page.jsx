

import Category from "@/components/Category";
import BookCard from "@/components/BookCard";

const AllBooksPage = async ({ searchParams }) => {
  const { category, search } =await searchParams || {};

  const res = await fetch("https://book-borrow-delta.vercel.app/data.json");
  const books = await res.json();

  let filteredbooks = books;


  if (category) {
    filteredbooks = filteredbooks.filter(
      (book) =>
        book.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    filteredbooks = filteredbooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">

      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Books</h1>

       
        <form method="GET" className="flex gap-2">
         
          {category && (
            <input type="hidden" name="category" value={category} />
          )}

          <input
            type="text"
            name="search"
            defaultValue={search || ""}
            placeholder="Search..."
            className="border px-3 py-1 rounded-md text-sm w-40"
          />

          <button type="submit" className="text-sm px-2 border rounded">
            Go
          </button>
        </form>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-6">

        
        <div className="w-full lg:w-40 mt-6">
          <Category />
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex-1">
          {filteredbooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllBooksPage;