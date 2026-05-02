import BookCard from "./BookCard";
import PhotoCard from "./BookCard";

const TopGenerations = async () => {
    const res = await fetch('https://book-borrow-delta.vercel.app/data.json')
    const books = await res.json()
    const topbooks = books.slice(0, 4)




    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {topbooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default TopGenerations;