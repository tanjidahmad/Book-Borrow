// import { Button } from "@heroui/react";
// import Link from "next/link";

// const Banner = () => {
//   return (
//     <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
//       {/* Overlay */}
//       <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
//         <div className="max-w-7xl mx-auto px-6 text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
//             Turn Ideas into Stunning AI Art
//           </h1>
//           <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
//             Generate high-quality images from simple text prompts.
//           </p>

//           <div className="flex gap-4">
//             <Link href="#">
//               <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
//                 Generate Now
//               </Button>
//             </Link>

//             <Link href="/pricing">
//               <Button variant="outline" className="text-white">
//                 View Pricing
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
      className="h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"
    >
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Explore the World of Books
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Discover, read, and enjoy thousands of books from different genres.
          </p>

          <div className="flex gap-4">
            <Link href="/all-books">
              <Button className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                Browse Now
              </Button>
            </Link>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;