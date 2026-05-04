import BookCard from "./BookCard";


const TopGenerations = async () => {
    const res = await fetch('https://book-borrow-delta.vercel.app/data.json')
    const books = await res.json()
    const topbooks = books.slice(0, 4)




    return (
        <div  className="px-4 sm:px-6">
            <h1 className="text-xl sm:text-2xl font-bold my-5 text-center sm:text-left">Top Generations</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {topbooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default TopGenerations;