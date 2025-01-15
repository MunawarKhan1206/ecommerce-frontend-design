import Image from "next/image";
const products = [
  {
    id: 1,
    name: "T-shirts with multiple colors, for men",
    price: "$10.30",
    image: "/bluesh.png",    
  },
  {
    id: 2,
    name: "Jeans shorts for men blue color",
    price: "$10.30",
     image: "/jack.png", },
  {
    id: 3,
    name: "Brown winter coat medium size",
    price: "$12.50",
    image: "/coat.png",
  },
  {
    id: 4,
    name: "Jeans bag for travel for men",
    price: "$34.40",
     image: "/wallet.png",
     
  },
  {
    id: 5,
    name: "Leather wallet",
    price: "$19.00",
     image: "/bag.png",
     
  },
  {
    id: 6,
    name: "Canon camera black, 100x zoom",
    price: "$9.99",
     image: "/bitmap.png",
     
  },
  {
    id: 7,
    name: "Headset for gaming with mic",
    price: "$8.99",
     image: "/wirelessheadphone.png",
     
  },
  {
    id: 8,
    name: "Smartwatch silver color modern",
    price: "$10.30",
     image: "/bag.png",
     
  },
  {
    id: 9,
    name: "Jeans bag for men leather material",
    price: "$10.30",
     image: "/smartwatches.png",
     
  },
  {
    id: 10,
    name: "Blue wallet for men",
    price: "$8.95",
     image: "/smatches.png",
     
  },
];

const Productpage = () => {
  return (
    <div className="p-3 mb-10">
      <h2 className="text-2xl font-bold mb-3">Recommended items</h2>
      <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className= "bg-white p-2"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={130}
              height={130}
              style={{ objectFit: 'cover' }}
              className=" rounded-md mb-5"
            />
            <p className="text-black text-base font-semibold ">{product.price}</p>
            <h3 className="text-base  text-black font-medium">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productpage;
