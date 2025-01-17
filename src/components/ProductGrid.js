import Image from "next/image";
import React from "react";
const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-sm">
          <Image src={product.image} alt={product.name}   width={400}
                height={300} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p>
            <span className="text-gray-500 line-through">${product.oldPrice}</span>{" "}
            <span className="text-blue-500 font-bold">${product.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
