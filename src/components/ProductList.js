"use client";
import Image from "next/image";
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center border p-4 rounded shadow-sm">
          <Image src={product.image} alt={product.name}   width={400}
                height={300} className="w-32 h-32 object-cover mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">Rating: {product.rating}</p>
            <p>
              <span className="text-gray-500 line-through">${product.oldPrice}</span>{" "}
              <span className="text-blue-500 font-bold">${product.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
