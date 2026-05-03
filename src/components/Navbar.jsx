// // "use client";
// // import { authClient } from "@/lib/auth-client";
// // import { Avatar, Button } from "@heroui/react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { FaBook } from "react-icons/fa";


// // const Navbar = () => {
// //   const userData = authClient.useSession();
// //   const user = userData.data?.user;

// //   const handleSignOut = async () => {
// //     await authClient.signOut();
// //   }

// //   return (
// //     <div className="border-b px-2">
// //       <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
// //        <Link href="/" className="flex gap-2 items-center">
// //   <FaBook className="text-green-600 text-xl" />
// //   <h3 className="font-black text-lg">BookNest</h3>
// // </Link>

// //         <ul className="flex items-center gap-5 text-sm">
// //           <li>
// //             <Link href={"/"}>Home</Link>
// //           </li>
// //           <li>
// //             <Link href={"/all-books"}>All Books</Link>
// //           </li>
// //           {/* <li>
// //             <Link href={"/pricing"}>Pricing</Link>
// //           </li> */}
// //           <li>
// //             <Link href={"/profile"}>MyProfile</Link>
// //           </li>
// //         </ul>

// //         <div className="flex gap-4">
// //           {!user && (
// //             <ul className="flex items-center  text-sm gap-5">
// //               {/* <li>
// //                 <Link href={"/signup"}>SignUp</Link>
// //               </li> */}
// //               <li>
// //                 <Link href={"/signin"}>
                
// //                 <Button
// //   size="sm"
// //   variant="outline"
// //   className="flex items-center justify-center leading-none"
// // >
// //   Login
// // </Button>
      
// //       </Link>
// //               </li>
// //             </ul>
// //           )}

// //           {user && (
// //             <div className="flex gap-3">
// //                 <p>{user?.name}</p>
// //               {/* <Avatar size="sm">
// //                 <Avatar.Image
// //                   alt="John Doe"
// //                   src={user?.image}
// //                   referrerPolicy="no-referrer"
// //                 />
// //                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
// //               </Avatar> */}

// //               <Button onClick={handleSignOut} size="sm" variant="danger">LogOut</Button>
// //             </div>
// //           )}
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;


// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaBook } from "react-icons/fa";

// const Navbar = () => {
//   const userData = authClient.useSession();
//   const user = userData.data?.user;

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   return (
//     <div className="border-b px-3 sm:px-4">
//       <nav className="flex flex-wrap justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
//         {/* Logo */}
//         <Link href="/" className="flex gap-2 items-center">
//           <FaBook className="text-green-600 text-xl" />
//           <h3 className="font-black text-lg">BookNest</h3>
//         </Link>

//         {/* Menu */}
//         <ul className="flex flex-wrap justify-center w-full sm:w-auto mt-3 sm:mt-0 items-center gap-4 sm:gap-5 text-sm">
//           <li>
//             <Link href={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link href={"/all-books"}>All Books</Link>
//           </li>
//           <li>
//             <Link href={"/profile"}>MyProfile</Link>
//           </li>
//         </ul>

//         {/* Right side */}
//         <div className="flex justify-center sm:justify-end w-full sm:w-auto mt-3 sm:mt-0 gap-3">
          
//           {!user && (
//             <Link href={"/signin"}>
//               <Button
//                 size="sm"
//                 variant="outline"
//                 className="flex items-center justify-center leading-none"
//               >
//                 Login
//               </Button>
//             </Link>
//           )}

//           {user && (
//             <div className="flex items-center gap-2 sm:gap-3">
//               <p className="text-sm">{user?.name}</p>

//               <Button onClick={handleSignOut} size="sm" variant="danger">
//                 LogOut
//               </Button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-3 sm:px-4">
      <nav className="relative flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex gap-2 items-center">
            <FaBook className="text-green-600 text-xl" />
            <h3 className="font-black text-lg">BookNest</h3>
          </Link>
        </div>

        {/* CENTER MENU */}
        <ul
          className={`${
            open ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none z-50 p-4 sm:p-0 gap-6 text-sm sm:flex-1 sm:justify-center`}
        >
          <li onClick={() => setOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/all-books">All Books</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/profile">MyProfile</Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* Hamburger (mobile only) */}
          <button
            className="sm:hidden text-2xl p-2 rounded-md hover:bg-gray-200"
            onClick={() => setOpen(!open)}
          >
            <HiMenu />
          </button>

          {/* Login / User */}
          {!user && (
            <Link href={"/signin"}>
              <Button size="sm" variant="outline">
                Login
              </Button>
            </Link>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <p className="text-sm">{user?.name}</p>
              <Button onClick={handleSignOut} size="sm" variant="danger">
                LogOut
              </Button>
            </div>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;