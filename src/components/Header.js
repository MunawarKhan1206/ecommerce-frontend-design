
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaShoppingCart, FaBars , FaEnvelope, FaHeart } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="shadow-md bg-white">
      {/* Mobile & Tablet Header */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        {/* Hamburger Menu */}
        <button>
          <FaBars className="text-xl" />
        </button>

        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <h1 className="text-lg font-bold text-blue-500">Brand</h1>
        </div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <FaShoppingCart className="text-xl" />
          </Link>
          <Link href="/profile">
            <FaUser className="text-xl" />
          </Link>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 bg-white">
        {/* Brand Section */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <h1 className="text-xl font-bold text-blue-500">Brand</h1>
        </div>

        {/* Search Section */}
        <div className="flex items-center border rounded-md overflow-hidden w-2/3">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full outline-none text-base"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {/* Profile and Cart */}
        <div className="flex items-center space-x-6 ">
        <Link href="/profile">
               <FaUser className="text-lg" />
               <p className="text-xs mt-1">Profile</p>
             </Link>
           </div>
          <div className="flex flex-col items-center cursor-pointer">
             <Link href="/contact">
               <FaEnvelope className="text-lg" />
               <p className="text-xs mt-1">Message</p>
             </Link>
           </div>
           <div className="flex flex-col items-center cursor-pointer">
             <Link href="/orders">
               <FaHeart className="text-lg" />
              <p className="text-xs mt-1">Orders</p>
             </Link>
           </div>
           <div className="flex flex-col items-center cursor-pointer">
             <Link href="/cart">
               <FaShoppingCart className="text-lg" />
               <p className="text-xs mt-1">My Cart</p>
            </Link>
        </div>
           
      </div>
       <div className="flex flex-wrap items-center justify-between px-4 md:px-6 py-2 ">
   <div className="flex flex-wrap items-center space-x-3 md:space-x-5 text-sm md:text-base text-black">
     <FaBars className="cursor-pointer" />
     <span className="hover:underline cursor-pointer">All category</span>
     <span className="hover:underline cursor-pointer hidden sm:inline-block">Hot offers</span>
     <span className="hover:underline cursor-pointer hidden md:inline-block">Gift boxes</span>
     <span className="hover:underline cursor-pointer hidden lg:inline-block">Projects</span>
     <span className="hover:underline cursor-pointer hidden xl:inline-block">Menu item</span>
     <span className="hover:underline cursor-pointer hidden xl:inline-block">Help</span>
   </div>

    <div className="flex flex-wrap items-center space-x-4 text-sm md:text-base text-gray-700 mt-2 md:mt-0">
        <div className="flex items-center space-x-2">
          <span>English, PKR</span>
      </div>
      <div className="flex items-center space-x-1">
          <span>Ship to -</span>
        <span className="text-black">Pakistan</span>
      </div>
    </div>
  </div>
    </header>
  );
};

export default Header;
