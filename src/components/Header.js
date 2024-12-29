"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaHeart, FaShoppingCart, FaSearch, FaFlag, FaBars } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="flex flex-col">
      {/* Top Section */}
      <div className="flex flex-wrap items-center justify-between px-4 md:px-8 py-4 shadow-md bg-white">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-100 flex justify-center items-center rounded-md">
            <FaShoppingCart className="text-blue-500 text-xl" />
          </div>
          <h1 className="text-xl font-bold text-blue-500">Brand</h1>
        </div>

        {/* Search Section */}
        <div className="flex items-center border rounded-md overflow-hidden w-full md:w-2/3 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full outline-none text-base"
          />
          <select className="border-l px-3 py-2 outline-none text-base">
            <option>All categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 flex items-center"
          >
            <FaSearch className="mr-2" /> Search
          </button>
        </div>

        {/* Profile and Icons Section */}
        <div className="flex items-center space-x-6 text-gray-500 mt-4 md:mt-0">
          <div className="flex flex-col items-center cursor-pointer">
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
      </div>

      {/* Sub-header Section */}
      <div className="flex items-center justify-between px-6 md:px-6 py-2 bg-gray-100 border-t-0 border-b-0 border-gray-300">
        {/* Left Menu Section */}
        <div className="flex items-center space-x-4 text-base text-gray-700">
          <FaBars className="cursor-pointer" />
          <span className="hover:underline cursor-pointer">All category</span>
          <span className="hover:underline cursor-pointer">Hot offers</span>
          <span className="hover:underline cursor-pointer">Gift boxes</span>
          <span className="hover:underline cursor-pointer">Projects</span>
          <span className="hover:underline cursor-pointer">Menu item</span>
          <span className="hover:underline cursor-pointer">Help</span>
        </div>
        <div className="flex items-center space-x-6 text-base text-gray-700">
          <div className="flex items-center space-x-2">
            <span>English, PKR</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Ship to - </span>
            <span className="text-base"> Pakistan</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;