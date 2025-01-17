"use client";
import React, { useState } from "react";
import ProductGrid from "@/components/ProductGrid.js";
import ProductList from "@/components/ProductList";

const Category = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const products = [
    { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", image: "/bluesh.png" },
    { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", image: "/jack.png" },
    { id: 3, name: "Brown winter coat medium size", price: "$12.50", image: "/coat.png" },
    { id: 4, name: "Jeans bag for travel for men", price: "$34.40", image: "/wallet.png" },
    { id: 5, name: "Leather wallet", price: "$19.00", image: "/bag.png" },
    { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", image: "/shorts.png" },
    { id: 7, name: "Headset for gaming with mic", price: "$8.99", image: "/wirelessheadphone.png" },
    { id: 8, name: "Smartwatch silver color modern", price: "$10.30", image: "/bag.png" },
    { id: 9, name: "Jeans bag for men leather material", price: "$10.30", image: "/smartwatches.png" },
    { id: 10, name: "Blue wallet for men", price: "$8.95", image: "/smatches.png" },
  ];
  return (
    <div className="category-page">
      <aside className="filters bg-gray-100 p-4 w-1/4">
        <h3 className="text-lg font-bold">Filters</h3>
      </aside>
      <div className="main-content w-3/4 p-4">
        <div className="view-controls flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">12,911 items in Mobile Accessories</h2>
          <div>
            <button
              className={`px-4 py-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setViewMode("grid")}
            >
              Grid View
            </button>
            <button
              className={`px-4 py-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setViewMode("list")}
            >
              List View
            </button>
          </div>
        </div>
        {viewMode === "grid" ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default Category;
