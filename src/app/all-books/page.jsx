// import Category from "@/components/Category";
// import PhotoCard from "@/components/BookCard";
// import BookCard from "@/components/BookCard";

// const AllPhotosPage = async ({searchParams}) => {
//     const {category} = await searchParams;
//     console.log(category)
//     const res = await fetch('https://book-borrow-delta.vercel.app/data.json')
//     const books = await res.json()

//     const filteredbooks = category ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) : books


//     return (
//         <div>

//             <h1 className="text-2xl font-bold m-4">All Photos</h1>

//             <Category/>

//             <div className="grid grid-cols-4 gap-5">
//                 {filteredbooks.map(book=> <BookCard key={book.id} book={book}/>)}
//             </div>

            
//         </div>
//     );
// };

// export default AllPhotosPage;


// import Category from "@/components/Category";
// import BookCard from "@/components/BookCard";

// const AllPhotosPage = async ({ searchParams }) => {
//   const { category, search } = searchParams || {};

//   const res = await fetch(
//     "https://book-borrow-delta.vercel.app/data.json"
//   );
//   const books = await res.json();

//   // 🔍 Filter by category (unchanged)
//   let filteredbooks = category
//     ? books.filter(
//         (book) =>
//           book.category.toLowerCase() === category.toLowerCase()
//       )
//     : books;

//   // 🔍 Filter by search (NEW)
//   if (search) {
//     filteredbooks = filteredbooks.filter((book) =>
//       book.title.toLowerCase().includes(search.toLowerCase())
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4">

//       {/* 🔥 Top Bar */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">All Books</h1>

//         {/* 🔍 Search */}
//         <form>
//           <input
//             type="text"
//             name="search"
//             defaultValue={search || ""}
//             placeholder="Search..."
//             className="border px-3 py-1 rounded-md text-sm w-40"
//           />
//         </form>
//       </div>

//       {/* 🔥 Layout */}
//       <div className="flex flex-col lg:flex-row gap-6">

//         {/* 🟢 Sidebar (Category untouched) */}
//         <div className="w-full lg:w-40">
//           <Category />
//         </div>

//         {/* 📚 Book Grid (unchanged) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex-1">
//           {filteredbooks.map((book) => (
//             <BookCard key={book.id} book={book} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AllPhotosPage;

import Category from "@/components/Category";
import BookCard from "@/components/BookCard";

const AllBooksPage = async ({ searchParams }) => {
  const { category, search } =await searchParams || {};

  const res = await fetch("https://book-borrow-delta.vercel.app/data.json");
  const books = await res.json();

  let filteredbooks = books;

  // 🔥 both filters together
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

      {/* 🔍 Top */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Books</h1>

        {/* 🔍 Search */}
        <form method="GET" className="flex gap-2">
          {/* preserve category */}
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

      {/* 🔥 Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
        <div className="w-full lg:w-40 mt-6">
          <Category />
        </div>

        {/* Grid */}
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