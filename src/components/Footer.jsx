
import Link from "next/link";
import { FaBook,FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Top Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 🔥 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 🔵 Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <Link href="/" className="flex justify-center sm:justify-start items-center gap-2">
              <FaBook className="text-green-600 text-xl" />
              <h2 className="text-lg font-bold">BookNest</h2>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore and borrow books digitally.  
              Your smart library experience.
            </p>
          </div>

          {/* 🟢 Explore */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/all-books">All Books</Link></li>
              <li><Link href="/profile">My Profile</Link></li>
            </ul>
          </div>

          {/* 🔵 Contact */}
<div className="flex justify-center sm:justify-start">
  <div className="border-2 border-orange-400 rounded-xl p-4 w-56 bg-gray-50 dark:bg-[#111] shadow-sm">
    
    <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
      Contact
    </h3>

    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
      
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-orange-500" />
        <span>+123 456 7890</span>
      </div>

      <div className="flex items-center gap-2">
        <FaEnvelope className="text-orange-500" />
        <span>support@gem.com</span>
      </div>

    </div>
  </div>
</div>

          {/* 🔴 CTA */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold">Start Reading</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover your next favorite book today.
            </p>

            <Link
              href="/signin"
              className="block sm:inline-block w-full sm:w-auto text-center px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* 🔥 Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} BookNest. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;