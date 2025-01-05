import Image from "next/image";
import React from "react";

const HomeOutdoorSection = () => {
  const items = [
    { title: "Soft chairs", price: "From USD 19", image: "/softchair.png" },
    { title: "Sofa & chair", price: "From USD 19", image: "/sofachair.png" },
    { title: "Kitchen dishes", price: "From USD 19", image: "/kitchendishes.png" },
    { title: "Smart watches", price: "From USD 19", image: "/smartwatches.png" },
    { title: "Kitchen mixer", price: "From USD 100", image: "/kitchenmixer.png" },
    { title: "Blenders", price: "From USD 39", image: "/blender.png" },
    { title: "Home appliance", price: "From USD 19", image: "/homeappliance.png" },
    { title: "Coffee maker", price: "From USD 10", image: "/coffeemaker.png" },
  ];

  return (
    <div className="container p-2 bg-white mx-auto mt-10  ">
      <div className=" grid lg:grid-cols-3  rounded-lg  ">
        {/* Left Section */}
        <div className=" p-5  flex flex-col justify-center  items-start rounded-lg"
        style={{
          backgroundImage: "url('/homeoutdoor.png')",
          backgroundSize: "500px 430px",
          width: "370px",
          height: "350px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
          <h2 className="text-2xl font-bold mb-3">Home and outdoor</h2>
          <button className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600">Source now</button>
        </div>
        <div className="p-2 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center text-center  border border-gray-200 rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-md object-cover mb-4"
              />
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOutdoorSection;
