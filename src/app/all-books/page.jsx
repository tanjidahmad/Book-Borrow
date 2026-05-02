import Category from "@/components/Category";
import PhotoCard from "@/components/BookCard";

const AllPhotosPage = async ({searchParams}) => {
    const {category} = await searchParams;
    console.log(category)
    const res = await fetch('https://book-borrow-delta.vercel.app/data.json')
    const books = await res.json()

    const filteredbooks = category ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) : books


    return (
        <div>

            <h1 className="text-2xl font-bold m-4">All Photos</h1>

            <Category/>

            <div className="grid grid-cols-4 gap-5">
                {filteredbooks.map(book=> <PhotoCard key={book.id} book={book}/>)}
            </div>

            
        </div>
    );
};

export default AllPhotosPage;