// app/product/page.js
"use client";
import Link from "next/link";

const ProductPage1  = () => {
    const products = [
        {
          id: 1,
          name: "T-shirts with multiple colors, for men",
          price: "$10.30",
          image: "/tshirt.png",
          description: "Comfortable t-shirts available in multiple colors.",
        },
        {
          id: 2,
          name: "Jeans shorts for men blue color",
          price: "$10.30",
          image: "/jeans-shorts.png",
          description: "Stylish jeans shorts perfect for summer.",
        },
        {
          id: 3,
          name: "Brown winter coat medium size",
          price: "$12.50",
          image: "/winter-coat.png",
          description: "Warm and stylish winter coat.",
        },
        {
          id: 4,
          name: "Jeans bag for travel for men",
          price: "$34.00",
          image: "/jeans-bag.png",
          description: "Durable travel bag made of denim.",
        },
        {
          id: 5,
          name: "Leather wallet",
          price: "$99.00",
          image: "/leather-wallet.png",
          description: "Premium quality leather wallet.",
        },
        {
          id: 6,
          name: "Canon camera black, 100x zoom",
          price: "$9.99",
          image: "/camera.png",
          description: "High-performance camera with 100x zoom.",
        },
        {
          id: 7,
          name: "Headset for gaming with mic",
          price: "$8.99",
          image: "/headset.png",
          description: "Gaming headset with clear audio and mic.",
        },
        {
          id: 8,
          name: "Smartwatch silver color modern",
          price: "$10.30",
          image: "/smartwatch.png",
          description: "Feature-packed modern smartwatch.",
        },
        {
          id: 9,
          name: "Blue wallet for men leather material",
          price: "$10.30",
          image: "/blue-wallet.png",
          description: "Stylish blue leather wallet for men.",
        },
        {
          id: 10,
          name: "Electric kettle",
          price: "$80.95",
          image: "/kettle.png",
          description: "Efficient and stylish electric kettle.",
        },
      ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold">{product.price}</p>
            <Link
              href={`/product/${product.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage1;
