import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
const BookCard = ({book}) => {
    return (
        <Card className="border rounded-xl p-3 sm:p-4 hover:shadow-lg transition">
            <div className="relative w-full aspect-square">
            <Image
                src={book.image_url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={book.title}
                className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{book.category}</Chip>
            </div>

            <div  className="mt-3">
                <h2 className="font-medium text-sm sm:text-base line-clamp-2">{book.title}</h2>
            </div>

           {/* <div className="flex gap-5">
             <div className="flex items-center gap-2">
                <p><FaHeart /></p>
                <p>{book.likes}</p>
            </div>

            <Separator orientation="vertical"/>


               <div className="flex items-center gap-2">
                <p><BiDownload /></p>
                <p>{book.downloads}</p>
            </div>
           </div> */}

     <Link href={`/all-books/${book.id}`}>      <Button variant="outline" className='w-full mt-3 text-sm'>Details</Button></Link>
            
        </Card>
    );
};

export default BookCard;


