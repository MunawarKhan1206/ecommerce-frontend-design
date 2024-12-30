"use client"
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold">Subscribe on our newsletter</h3>
        <p className="text-gray-600 text-sm">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="mt-4 flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
      {/* Footer Links Section */}
      <div className="mt-12  border  bg-white border-blue-600">
        <div className="container  mx-auto px-3 flex flex-wrap justify-between items-start py-8">
          {/* Brand Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="text-blue-600 font-bold text-lg">Brand</h4>
            <p className="text-gray-600 text-sm mt-2">
              Best information about the company goes here but now lorem ipsum.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook-f  "></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <h5 className="font-semibold text-gray-700">About</h5>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Find Store</a></li>
                <li><a href="#" className="hover:text-blue-600">Categories</a></li>
                <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700">Partnership</h5>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Find Store</a></li>
                <li><a href="#" className="hover:text-blue-600">Categories</a></li>
                <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700">Information</h5>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Money Refund</a></li>
                <li><a href="#" className="hover:text-blue-600">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700">For Users</h5>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Login</a></li>
                <li><a href="#" className="hover:text-blue-600">Register</a></li>
                <li><a href="#" className="hover:text-blue-600">Settings</a></li>
                <li><a href="#" className="hover:text-blue-600">My Orders</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <p className="text-base   text-gray-600">© 2025 Ecommerce Web . All rights reserved By Munawar Khan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
